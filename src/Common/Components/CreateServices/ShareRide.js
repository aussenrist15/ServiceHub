import React, { useState } from "react";
import PARALLEX from "../../Static/Parallex.png";
import Parallax from "../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import roundToNearestMinutes from "date-fns/roundToNearestMinutes/index.js";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 500,
    maxWidth: 600,
    margin: 50,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  parall: {
    height: 250,
  },
  btn: {
    height: 50,
    marginBottom: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  marginTopBottom: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
  },
  input: {
    display: "none",
  },
}));

export const ShareRide = () => {
  const classes = useStyles();
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [pickupDate, setPickupDate] = useState(new Date())
  const [pickupTime, setPickupTime] = useState(new Date())
  const [passengers, setPassengers] = useState()
  const [fare, setFare] = useState()
  const [description, setDescription] = useState("")
  const history = useHistory();

  const handleSourceChange = (value) => {
    setSource(value);
  };

  const handleDestinationChange = (value) => {
    setDestination(value);
  };

  const handleDateChange = (date) => {
    setPickupDate(date);
  };

  const handleTimeChange = (time) => {
    setPickupTime(time)
  }

  const handlePassengersChange = (value) => {
    setPassengers(value);
  };

  const handleFareChange = (value) => {
    setFare(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/api/v1/ride/add-ride", {
      source: source,
      destination: destination,
      desc: description,
			pickupDate: pickupDate,
			pickupTime: pickupTime,
			passengers: passengers,
			fare: fare,
    }, {
      withCredentials: true
    })
    .then(res => {
      history.push("/user/user-services");
    })
  }

  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <Grid container spacing={1} justify="center">
        <Grid>
          <h1>Share A Ride</h1>
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-basic"
              label="Starting Location"
              variant="outlined"
              onChange={(e) => handleSourceChange(e.target.value)}
            />
            <br />
            <br />

            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              onChange={(e) => handleDestinationChange(e.target.value)}
            />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Pickup Date"
                format="MM/dd/yyyy"
                value={pickupDate}
                onChange={(e) => handleDateChange(e)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Pickup Time"
                value={pickupTime}
                onChange={(e) => handleTimeChange(e)}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-number"
              label="No. Of Passengers"
              type="number"
              className={classes.marginTopBottom}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handlePassengersChange(e.target.value)}
            />
            <TextField
              id="standard-number"
              label="Fare"
              type="number"
              className={classes.marginTopBottom}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleFareChange(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description about the ride"
              multiline
              rows={5}
              defaultValue=""
              variant="outlined"
              className={classes.marginTopBottom}
              onChange={(e) => handleDescriptionChange(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              className={classes.marginTopBottom}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
