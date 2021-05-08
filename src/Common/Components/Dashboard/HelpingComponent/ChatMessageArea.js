import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";

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

export const ChatMessageArea = ({
  SendMessage,
  setTextMessage,
  messages,
  TextArea,
}) => {
  const classes = useStyles();

  const Style1 = {
    backgroundColor: "#0063B2FF",
    color: "white",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "30px",
    fontWeight: "bold",
    width: "max-content",
    maxWidth: "100%",
  };

  const Style2 = {
    backgroundColor: "#9CC3D5FF",
    color: "white",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "30px",
    fontWeight: "bold",
    width: "max-content",
    maxWidth: "100%",
  };

  let Messages = messages.map((msg) => {
    return (
      <ListItem key="1">
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              align={msg.type === "sent" ? "right" : "left"}
              primary={
                <p style={msg.type === "sent" ? Style1 : Style2}>{msg.text}</p>
              }
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              align={msg.type === "sent" ? "right" : "left"}
              secondary={msg.from}
            ></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    );
  });

  return (
    <Grid item xs={9} style={{ overflowY: "hidden", overflowX: "hidden" }}>
      <List className={classes.messageArea}>{Messages}</List>
      <Divider />
      <Grid container style={{ padding: "10px" }}>
        <Grid item xs={11}>
          <TextField
            onChange={(e) => {
              setTextMessage(e.target.value);
              console.log(e.target.value);
            }}
            value={TextArea}
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid xs={1} align="right">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              SendMessage();
            }}
          >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};
