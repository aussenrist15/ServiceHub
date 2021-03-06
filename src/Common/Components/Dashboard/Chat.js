import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { Route, Link } from "react-router-dom";
import { io } from "socket.io-client";

// reactstrap components
import { Card, CardHeader, Table, Row } from "reactstrap";
import { ChatMessageArea } from "./HelpingComponent/ChatMessageArea";
import { NoMessage } from "./HelpingComponent/NoMessage";
import { ChatUsers } from "./HelpingComponent/ChatUsers";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const [users, setUsers] = useState([
    { username: "hamzaakram", name: "Hamza Akram" },
    { username: "sheikh", name: "Abdul Basit" },
  ]);
  const [selectChatUser, setSelectedUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username);
    const newSocket = io("http://localhost:3001", {
      query: { username },
      transports: ["websocket"],
      autoConnect: true,
    });
    newSocket.connect();
    console.log(newSocket);
    newSocket.on("receive-message", handleNewIncomingMessage);
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  function SendMessage() {
    // selectedChatUser
    console.log(textMessage);
    if (!textMessage) {
      return;
    }
    let username = localStorage.getItem("username");
    console.log(socket.connected);
    if (selectChatUser) {
      socket.emit("message-send", {
        text: textMessage,
        to: selectChatUser.username,
        from: username,
      });
      console.log("Message Sent");
      setTextMessage("");
      const newMsg = { type: "sent", text: textMessage, from: "You" };
      setMessages((mesArr) => [...mesArr, newMsg]);
    }
  }

  const handleNewIncomingMessage = useCallback(({ text, from }) => {
    console.log("abc");
    console.log(text);
    const newMessage = { type: "received", text, from };
    setMessages((mesArr) => [...mesArr, newMessage]);
  }, []);

  return (
    <div className="header bg-gradient-info pb-10 pt-5 pt-md-8">
      <Row>
        <div className="col">
          <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
              <h3 className="text-white mb-0">
                Welcome to our Servi-Chat Room
              </h3>
            </CardHeader>
            <Table
              className="align-items-center table-dark table-flush"
              responsive
            ></Table>
          </Card>
        </div>
      </Row>

      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Abdul Basit"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <ChatUsers users={users} setSelectedUser={setSelectedUser} />
        </Grid>

        {/* Right Panel Msg Area Starts Here */}

        {/* <ChatMessageArea /> */}
        <Route exact path="/dashboard/chatmessages">
          <NoMessage />
        </Route>

        <Route path="/dashboard/chatmessages/:username">
          <ChatMessageArea
            SendMessage={SendMessage}
            setTextMessage={setTextMessage}
            messages={messages}
            TextArea={textMessage}
          />
        </Route>
      </Grid>
    </div>
  );
};

export default Chat;
