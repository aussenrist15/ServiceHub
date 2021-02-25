import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    position: "relative",
    minHeight: 400,
  },
  btn: {
    height: 37,
    marginleft: 50,
  },
  root2: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export const PlaceAccomodation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const step = props.step;
  const setStep = props.setStep;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  function valuetextguests(value) {
    return `${value}`;
  }
  function valuetextbeds(value) {
    return `${value}`;
  }
  function valuetextbathrooms(value) {
    return `${value}`;
  }
  return (
    <div className={classes.root}>
      <Card
        // className={classes.root}
        variant="outlined"
        className={classes.margintop}
      >
        <CardContent>
          <br></br>
          <h3>Place Accomodation</h3>
          <AppBar position="static" color="default">
            <br></br>

            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="Guests" {...a11yProps(0)} />
              <Tab label="Amenities" {...a11yProps(1)} />
              <Tab label="Spaces" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Typography
                id="slider_guests"
                gutterBottom
                className={classes.root1}
              >
                <p>
                  <b>How many guests can your place accommodate?</b>
                </p>
                Check that you have enough beds to accommodate all your guests
                comfortably.<br></br>
                <br></br>
                <p>
                  <b>GUESTS</b>
                </p>
                <br></br>
              </Typography>
              <Slider
                defaultValue={0}
                max={30}
                getAriaValueText={valuetextguests}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
              />

              <Typography
                id="slider_beds"
                gutterBottom
                className={classes.root1}
              >
                <br></br>
                <br></br>
                <b> How many beds can guests use?</b>
                <br></br>
                <br></br>
                <p>
                  <b>BEDS</b>
                </p>

                <br></br>
              </Typography>
              <Slider
                defaultValue={0}
                max={30}
                getAriaValueText={valuetextbeds}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
              />

              <Typography
                id="slider_bathrooms"
                gutterBottom
                className={classes.root1}
              >
                <br></br>
                <br></br>
                <p>
                  <b> How many bathrooms?</b>
                </p>
                Count bathrooms that don’t have a shower or bathtub as a half
                bathroom.
                <br></br>
                <br></br>
                <p>
                  <b>BATHROOMS</b>
                </p>
                <br></br>
              </Typography>
              <Slider
                defaultValue={0}
                max={30}
                getAriaValueText={valuetextbathrooms}
                aria-labelledby="discrete-slider-always"
                step={0.5}
                marks={marks}
                valueLabelDisplay="on"
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <FormGroup column>
                <br></br>
                <p>
                  <b>What amenities do you offer?</b>
                </p>
                Check that you have enough beds to accommodate all your guests
                comfortably.<br></br>
                <br></br>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="essentials"
                    />
                  }
                  label="Essentials"
                />
                <FormHelperText>
                  ____ Towels, bed sheets, soap, toilet paper, and pillows
                </FormHelperText>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="wifi"
                    />
                  }
                  label="Wifi"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="tv"
                    />
                  }
                  label="TV"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="heater"
                    />
                  }
                  label="Heater/Fireplace"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="checkedH"
                    />
                  }
                  label="Air Conditioning"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="shampoo"
                    />
                  }
                  label="Shampoo"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="iron"
                    />
                  }
                  label="Iron"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="hairdryer"
                    />
                  }
                  label="Hair Dryer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="breakfast"
                    />
                  }
                  label="Breakfast/coffee/tea"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="cookingbasics"
                    />
                  }
                  label="Cooking Basics"
                />
                <FormHelperText>
                  ____ Pots and pans, oil, salt and pepper
                </FormHelperText>
                <br></br>
                <br></br>
                <p>
                  <b>Safety Amenities</b>
                </p>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="smoke_detector"
                    />
                  }
                  label="Smoke detector"
                />
                <FormHelperText>
                  ____ Check your local laws, which may require a working smoke
                  detector in every room
                </FormHelperText>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="first_aid"
                    />
                  }
                  label="First aid kit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="fire_extinguisher"
                    />
                  }
                  label="Fire extinguisher"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="bedroomlock"
                    />
                  }
                  label="Lock on bedroom door"
                />
                <FormHelperText>
                  ____ Private room can be locked for safety and privacy
                </FormHelperText>
              </FormGroup>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <FormGroup column>
                <br></br>
                <p>
                  <b>What spaces can guests use?</b>
                </p>
                Include common areas, but don’t add spaces that aren’t on your
                property.<br></br>
                <br></br>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="dryerlaundary"
                    />
                  }
                  label="Laundary-dryer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="kitchen"
                    />
                  }
                  label="Kitchen"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="pool"
                    />
                  }
                  label="Pool"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="washer"
                    />
                  }
                  label="Laundary-Washer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="parking"
                    />
                  }
                  label="Parking"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="gym"
                    />
                  }
                  label="Gym"
                />
              </FormGroup>
            </TabPanel>
          </SwipeableViews>
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
    </div>
  );
};
