import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import { useHistory } from "react-router-dom";

export const ChatUsers = ({ users, setSelectedUser }) => {
  const history = useHistory();
  function openChat(name) {
    history.push(`/dashboard/chatmessages/:${name}`);
  }
  const Data = users.map((user) => (
    <ListItem
      button
      key="RemySharp"
      onClick={() => {
        openChat(user.username);
        setSelectedUser(user);
        console.log(user);
        console.log("Clicked");
      }}
    >
      <ListItemIcon>
        <Avatar
          alt={user.username}
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
