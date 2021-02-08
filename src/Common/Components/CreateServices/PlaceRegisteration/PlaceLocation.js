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
    fontSize: 20,
    marginLeft: 70,
  },
  pos: {
    marginBottom: 12,
  },
  parall: {
    height: 250,
  },
  btn: {
    height: 37,
    marginleft: 50,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    marginLeft: 100,
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
  marginLeft: {
    marginLeft: 10,
    marginBlock: 15,
  },
  marginleft1: {
    marginLeft: 100,
  },
  textAlign: {
    textAlign: "Center",
  },
  width: {
    width: "auto",
  },
}));

export const PlaceLocation = () => {
  const defaultProps = {
    options: CountryNames,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: CountryNames.map((option) => option.title),
  };
  const classes = useStyles();
  const [Country, setCountry] = useState("");
  const [Street, setStreet] = useState("");
  const [Cities, setCities] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleCities = (event) => {
    setCities(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid>
          <h1>Where is your place located?</h1>
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
                    value={Country}
                    onChange={handleChange}
                    className={classes.marginTopBottom}
                  >
                    <Autocomplete
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
                    />
                  </Select>
                  <br></br>
                </FormControl>
                <h2>Street </h2>
                <form className={classes.root1} noValidate autoComplete="on">
                  <TextField
                    id="outlined-basic"
                    label="Enter your Street Address"
                    variant="outlined"
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
                  />
                </form>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  className={classes.top}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.buttonleft}
                  className={classes.btn}
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
