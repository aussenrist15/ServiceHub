/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const history = useHistory();

  function handleLogout() {
    console.log("Logout");
    localStorage.setItem("isLoggedin", "false");
    history.push("/landing");
  }

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link
            to="/user"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <AccountCircleIcon className={classes.icons} /> Profile
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Seller Options "
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/user/user-services" className={classes.dropdownLink}>
              My Services
            </Link>,
            <Link to="/user/create-gig" className={classes.dropdownLink}>
              Create A Gig
            </Link>,
            <Link to="/user/create-place" className={classes.dropdownLink}>
              Rent A Place
            </Link>,
            <Link to="/user/create-ride" className={classes.dropdownLink}>
              Share A Ride
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={handleLogout}
          color="transparent"
          className={classes.navLink}
        >
          <ExitToAppIcon className={classes.icons} /> Logout
        </Button>
      </ListItem>
    </List>
  );
}
