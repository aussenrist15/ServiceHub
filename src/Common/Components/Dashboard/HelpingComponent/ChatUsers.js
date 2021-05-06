import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Item from "antd/lib/list/Item";
import List from "@material-ui/core/List";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";

export const ChatUsers = () => {
  let socket;
  var connectionOptions = {
    transports: ["websocket"],
    autoConnect: false,
  };
  socket = io("http://localhost:3001", connectionOptions);
  socket.on("connection _error", (err) => {
    if (err.message === "invalid username") {
      console.log("ERROR");
    }
  });

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username);
    socket.auth = { username };
    socket.connect();
  }, []);

  socket.on("users", (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
      //initReactiveProperties(user);
    });

    socket.on("user connected", (user) => {
      // TODO
      setUsers((existingusers) => [...existingusers, user]);
      console.log(user);
    });
    // put the current user first, and then sort by username
    users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    //console.log(users);
  });
  const history = useHistory();
  const [users, setUsers] = useState([]);
  function openChat(name) {
    history.push(`/dashboard/chatmessages/:${name}`);
  }
  const Data = users.map((user) => (
    <ListItem
      button
      key="RemySharp"
      onClick={() => {
        openChat(user);
        console.log("Clicked");
      }}
    >
      <ListItemIcon>
        <Avatar
          alt={user}
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </ListItemIcon>
      <ListItemText primary={user.username}></ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  ));
  return users.length == 0 ? (
    <h1 style={{ marginLeft: "30%", marginTop: "50%" }}>No Chats</h1>
  ) : (
    <List>{Data}</List>
  );
};
