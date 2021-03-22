import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

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

export const Overview = (props) => {
  const defaultProps = {
    options: Category,
    getOptionLabel: (option) => option.title,
  };

  const step = props.step;
  const setStep = props.setStep;

  const flatProps = {
    options: Category.map((option) => option.title),
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
          <br></br>

          <FormControl className={classes.formControl}>
            <Card
              className={classes.root}
              variant="outlined"
              className={classes.margintop}
            >
              <br></br>
              <FormControl className={classes.marginLeft}>
                <h1>Overview </h1>
                <TextField
                  // className={classes.root1}
                  id="outlined-multiline-static"
                  label="Gig Title (I will do something I am really good at) "
                  multiline
                  rows={8}
                  defaultValue=""
                  //  onChange={handleDescChange}
                  variant="outlined"
                  className={classes.marginTopBottom}
                />
              </FormControl>

              <br></br>
              <CardContent>
                <h2>Category </h2>
                <FormControl className={classes.formControl1}>
                  <InputLabel id="demo-simple-select-label">
                    Choose your Category<br></br>
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
                          label="Category"
                          margin="normal"
                          className={classes.marginLeft}
                        />
                      )}
                    />
                  </Select>
                  <br></br>
                </FormControl>
                <h2>Sub-Category</h2>
                <br></br>
                <form className={classes.root1} noValidate autoComplete="on">
                  <TextField
                    id="outlined-basic"
                    label="Choose your Sub-Category"
                    variant="outlined"
                  />
                </form>
                <FormHelperText className={classes.marginLeft}>
                  Graphic And Design (Logo Design / Resume designs /
                  Illustrations / Brochure design / poster design / cartoons and
                  comics / menu design){" "}
                  <FormHelperText>
                    Digital Marketing (Social Media Advertising / Social Media
                    Marketing / SEO )
                  </FormHelperText>
                  <FormHelperText>
                    Writing And Translation (Articles and blog posts /
                    Proofreading And Editing / Transltion / Website Content /
                    Book Editing / Resume Writing / Technical Writing / Cover
                    Letters / Case Studies / ScriptWriting)
                  </FormHelperText>
                  <FormHelperText>
                    Video And Animation (Video Editing / Short Video Ads /
                    Aimated GIFS / LOGO Animation / Character Animation /
                    Subtitles And Captions / Visual Effects / SlideShow Video )
                  </FormHelperText>
                  <FormHelperText>
                    Programming And Tech (Wordpress / Website Builders and CMS /
                    Game Development / Web Programming / Mob Apps / Desktop
                    Applications )
                  </FormHelperText>
                  <FormHelperText>
                    Data (Databases / Data processing / Data Analytics / Data
                    Visualisation / Data Science / Data Entry )
                  </FormHelperText>
                </FormHelperText>
                <br></br>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  className={classes.buttonleft}
                  className={classes.btn}
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Save and Continue
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.buttonleft}
                  className={classes.btn}
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

const Category = [
  { title: "Graphic And Design" },
  { title: "Digital Marketing" },
  { title: "Writing And Translation" },
  { title: "Video And Animation" },
  { title: "Music And Audio" },
  { title: "Programming Tech" },
  { title: "Data" },
];
