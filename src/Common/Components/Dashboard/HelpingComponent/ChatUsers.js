import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Item from "antd/lib/list/Item";
import List from "@material-ui/core/List";
import { useHistory } from "react-router-dom";

export const ChatUsers = () => {
  const history = useHistory();
  const [users, setUsers] = useState(["Sherry", "Hamza", "Basit", "Ayesha"]);
  function openChat(name) {
    history.push(`/dashboard/chatmessages/:${name}`);
  }
  const Data = users.map((user) => (
    <ListItem
      button
      key="RemySharp"
      onClick={() => {
        openChat(user);
      }}
    >
      <ListItemIcon>
        <Avatar
          alt={user}
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </ListItemIcon>
      <ListItemText primary={user}></ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  ));
  return users.length == 0 ? (
    <h1 style={{ marginLeft: "30%", marginTop: "50%" }}>No Chats</h1>
  ) : (
    <List>{Data}</List>
  );
};
