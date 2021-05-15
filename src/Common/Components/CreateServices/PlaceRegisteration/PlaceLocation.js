import React, { useState } from "react";
import PARALLEX from "../../../Static/Parallex.png";
import Parallax from "../../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { CenterFocusStrong, Room } from "@material-ui/icons";
import { Box } from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Googlemap from "./Googlemap";

const useStyles = makeStyles((theme) => ({
  root1: {
    "& > *": {
      margin: theme.spacing(0),
      width: "62ch",
    },
  },
  root: {
    flexGrow: 1,
    minWidth: 500,
    maxWidth: 100,
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
    fontSize: 20,
    // marginLeft: 70,
  },
  pos: {
    marginBottom: 12,
  },
  parall: {
    height: 250,
  },
  btn: {
    height: 37,
    // marginleft: 50,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    // marginLeft: 100,
  },
  formControl1: {
    margin: theme.spacing(0),
    minWidth: 160,
    // marginLeft: 100,
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
  // marginLeft: {
  //   marginLeft: 10,
  //   marginBlock: 15,
  // },
  // marginleft1: {
  //   marginLeft: 100,
  // },
  textAlign: {
    textAlign: "Center",
  },
  width: {
    width: "auto",
  },
}));

export const PlaceLocation = (props) => {
  const defaultProps = {
    options: CountryNames,
    getOptionLabel: (option) => option.title,
  };

  const step = props.step;
  const setStep = props.setStep;

  const flatProps = {
    options: CountryNames.map((option) => option.title),
  };

  const conNames = [
    { title: "Pakistan" },
    { title: "India" },
    { title: "Canada" },
    { title: "USA" },
    { title: "Germany" },
    { title: "Saudia Arabia" },
    { title: "Australia" },
    { title: "Bangladesh" },
    { title: "China" },
  ];

  const [position, setPosition] = useState(null);
  const classes = useStyles();

  function handleClick() {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude);
      let lat = pos.coords.latitude;
      console.log(pos.coords.longitude);
      let lont = pos.coords.longitude;
      props.setPosition({ lat, lont });
      console.log(props.Position);
      setPosition(props.Position);
    });
  }
  return (
    <div className={classes.root}>
      <Googlemap position={position} />
      <Grid container spacing={1}>
        <Grid>
          <h1>Where is your place located?</h1>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className={classes.marginleft1} className={classes.title}>
            Guests will only get your exact address once they’ve booked a
            reservation.
          </p>
          <FormControl className={classes.formControl}>
            <Card
              className={classes.root}
              variant="outlined"
              className={classes.margintop}
            >
              <br></br>
              <CardActions>
                <br></br>
                <Button
                  onClick={handleClick}
                  className={classes.button}
                  variant="outlined"
                  //color="secondary"
                  className={classes.top}
                  // className={classes.marginleft1}
                >
                  <AddLocationOutlinedIcon
                    className={classes.width}
                    //className={classes.marginleft1}
                  ></AddLocationOutlinedIcon>
                  Add Current Location
                </Button>
              </CardActions>
              <br></br>
              <CardContent>
                <h2>Country/Region </h2>
                <FormControl className={classes.formControl1}>
                  <InputLabel id="demo-simple-select-label">
                    Choose your Country/Region<br></br>
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.Country}
                    onChange={(e) => props.handleCountry(e.target.value)}
                    className={classes.marginTopBottom}
                  >
                    {conNames.map((name) => {
                      return (
                        <MenuItem value={name.title}>{name.title}</MenuItem>
                      );
                    })}
                    {/* <Autocomplete
                      {...defaultProps}
                      id="auto-complete"
                      autoComplete
                      includeInputInList
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country's name"
                          margin="normal"
                          className={classes.marginLeft}
                        />
                      )}
                    /> */}
                  </Select>
                  <br></br>
                </FormControl>
                <h2>Street </h2>
                <form className={classes.root1} noValidate autoComplete="on">
                  <TextField
                    id="outlined-basic"
                    label="Enter your Street Address"
                    variant="outlined"
                    onChange={(e) => props.handleStreet(e.target.value)}
                  />
                </form>
                <FormHelperText className={classes.marginLeft}>
                  House name/number + street/road
                </FormHelperText>
                <br></br>
                <h2>City</h2>
                <form className={classes.root1} noValidate autoComplete="on">
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    onChange={(e) => props.handleCities(e.target.value)}
                  />
                </form>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.buttonleft}
                  className={classes.btn}
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Next
                </Button>
              </CardActions>
            </Card>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

const CountryNames = [
  { title: "Pakistan" },
  { title: "India" },
  { title: "Canada" },
  { title: "USA" },
  { title: "Germany" },
  { title: "Saudia Arabia" },
  { title: "Australia" },
  { title: "Bangladesh" },
  { title: "China" },
];
