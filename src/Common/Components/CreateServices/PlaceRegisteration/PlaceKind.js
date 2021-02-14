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
    height: 37,
    marginleft: 50,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    marginLeft: 100,
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
}));

export const PlaceKind = (props) => {
  const classes = useStyles();
  const [PropertyType, setProperyType] = useState("");
  const [Rooms, setRooms] = useState("");
  const [PlaceType, setPLaceType] = useState("");

  const step = props.step;
  const setStep = props.setStep;

  const handleChange = (event) => {
    setProperyType(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setRooms(event.target.value);
  };

  const handlePlaceTypeChange = (event) => {
    setPLaceType(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid>
          <h1>What Kind of Place are you listing?</h1>
          <br></br>
          <FormControl className={classes.formControl}>
            <Card
              className={classes.root}
              variant="outlined"
              className={classes.margintop}
            >
              <CardContent>
                <h2 className={classes.marginleft1}>Property Type </h2>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Choose a property type<br></br>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={PropertyType}
                    onChange={handleChange}
                    className={classes.marginTopBottom}
                  >
                    <MenuItem value="Appartment" className={classes.textAlign}>
                      Appartment
                      <FormHelperText className={classes.marginLeft}>
                        _Typically located in multi-unit residential buildings
                        or complexes where other people live
                      </FormHelperText>
                    </MenuItem>
                    <MenuItem value="House">
                      House
                      <FormHelperText className={classes.marginLeft}>
                        _Often stand-alone structures but some houses, like
                        duplexes, may share walls or outdoor areas with other
                        houses
                      </FormHelperText>
                    </MenuItem>
                    <MenuItem value="Secondary Unit">
                      Secondary Unit
                      <FormHelperText className={classes.marginLeft}>
                        _Have a private entrance for guests and usually share
                        property with another structure
                      </FormHelperText>
                    </MenuItem>
                    <MenuItem value="Unique Space">
                      Unique Space
                      <FormHelperText className={classes.marginLeft}>
                        _Places to stay with interesting or unconventional
                        structural attributes in comparison with traditional
                        houses and apartments
                      </FormHelperText>
                    </MenuItem>
                    <MenuItem value="Bed and BreakFast">
                      Bed and Breakfast
                      <FormHelperText className={classes.marginLeft}>
                        _Professional hospitality businesses that offer
                        breakfast for guests. A host usually lives on the
                        property.
                      </FormHelperText>
                    </MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <br></br>
                <h2 className={classes.marginleft1}>
                  How many total rooms does your property have?
                </h2>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Rooms<br></br>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Rooms}
                    onChange={handleChange}
                    className={classes.marginTopBottom}
                  >
                    <MenuItem value="2-5" className={classes.textAlign}>
                      2-5
                    </MenuItem>
                    <MenuItem value="6-10">6-10</MenuItem>
                    <MenuItem value="11-20">11-20</MenuItem>
                    <MenuItem value="21-30">21-30</MenuItem>
                    <MenuItem value="31-40">31-40</MenuItem>
                    <MenuItem value="31-40">31-40</MenuItem>
                    <MenuItem value="41-50">41-50</MenuItem>
                    <MenuItem value="50+">50+</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <br></br>
                <h2 className={classes.marginleft1}>
                  Confirm the type of place guests will have{" "}
                </h2>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    type of place<br></br>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={PlaceType}
                    onChange={handleChange}
                    className={classes.marginTopBottom}
                  >
                    <MenuItem
                      value="Private Room"
                      className={classes.textAlign}
                    >
                      Appartment
                      <FormHelperText className={classes.marginLeft}>
                        _Guests have their own private room for sleeping. Other
                        areas could be shared
                      </FormHelperText>
                    </MenuItem>
                    <MenuItem value="House">
                      Shared Room
                      <FormHelperText className={classes.marginLeft}>
                        _Guests sleep in a bedroom or a common area that could
                        be shared with others.
                      </FormHelperText>
                    </MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  className={classes.top}
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  Back
                </Button>
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
