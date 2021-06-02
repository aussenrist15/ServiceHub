import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import axios from "axios";
import { ProfileView } from "../Dashboard/ProfileView";
import { ViewProfile } from "./ViewProfile";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export function ProfileDialogue(props) {
  const [loaded, setLoadded] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [orders, setOrders] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [complete, setComplete] = useState(false);
  const classes = useStyles();
  const { onClose, open, username } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose();
  };

  useEffect(() => {
    if (username) {
      axios
        .post(
          "http://localhost:5000/api/v1/user/otheruserdata",
          { username },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          setComplete(res.data.data[0].completed);
          setFname(res.data.data[0].first_name);
          setLname(res.data.data[0].last_name);
          setOrders(res.data.data[0].totalCompleteOrders);
          if (res.data.data[0].completed) {
            setAbout(res.data.data[0].about);
            setSkills(res.data.data[0].skills);
            setCountry(res.data.data[0].country);
            setCity(res.data.data[0].city);
          }
        });
    }
  }, [username]);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">PROFILE</DialogTitle>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ViewProfile
        fname={fname}
        lname={lname}
        complete={complete}
        city={city}
        country={country}
        skills={skills}
        orders={orders}
        about={about}
      />
    </Dialog>
  );
}

ProfileDialogue.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
