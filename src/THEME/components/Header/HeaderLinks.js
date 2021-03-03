/*eslint-disable*/
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";
 
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";
import Notifications from "../../../Common/Components/HelpingComponents/Notifications.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function HeaderLinks(props) {
  const [isNotifications, setNotifications] = useState(false);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleLogout() {
    console.log("Logout");
    localStorage.setItem("isLoggedin", "false");
    history.push("/");
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setNotifications(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();
  const notiClasess = useStyles2();
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
        <Button color="transparent" className={classes.navLink}>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none" }}
            className={classes.listItem}
          >
            <AccountCircleIcon className={classes.icons} /> Dashboard
          </Link>
        </Button>  
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
      <ListItem className={classes.listItem}>
        {/**TODO Add Popover */}
        <div>
          <Button
            aria-describedby={id}
            className={classes.navLink}
            onClick={handleClick}
          >
            {isNotifications ? (
              <NotificationsNoneIcon
                className={classes.icons}
              ></NotificationsNoneIcon>
            ) : (
              <NotificationsActiveIcon
                className={classes.icons}
              ></NotificationsActiveIcon>
            )}
            Notifications
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {/** Notifications */}
            <Notifications className={notiClasess.typography} />
          </Popover>
        </div>
      </ListItem>
    </List>
  );
}
