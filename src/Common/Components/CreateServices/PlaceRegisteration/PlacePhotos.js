import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { classNames } from "classnames";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  marginTopBottom: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
  },

  button: {
    margin: theme.spacing(0),
    width: 50,
  },
  buttonleft: {
    marginLeft: 450,
    width: 50,
    height: 38,
  },
  margintop: {
    margintop: 100,
    textAlign: "justify",
    marginLeft: 200,
    marginBlock: 50,
    marginRight: 500,
  },
  marginBlock: {
    marginBlock: 50,
    marginLeft: 150,
  },
  root: {
    minWidth: 675,
    height: 100,
  },
  pos: {
    marginleft: 100,
  },
}));

export const PlacePhotos = (props) => {
  const classes = useStyles();
  const step = props.step;
  const setStep = props.setStep;
  return (
    <div>
      <h1 className={classes.marginBlock}>Give a price to the buyers</h1>
      <p className={classes.margintop}>
        Enter the price that seems according to your place
      </p>
      <FormControl className={classes.formControl}>
        <Card
          className={classes.root}
          variant="outlined"
          className={classes.margintop}
        >
          <CardContent>
            <label htmlFor="contained-button-file">
            <TextField
              id="standard-number"
              label="Fare"
              type="number"
              onChange={(e) => props.handleFare(e.target.value)}
              className={classes.marginTopBottom}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </label>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.buttonleft}
              onClick={() => props.submitPlaceDetails()}
            >
              Finish
            </Button>
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
          </CardActions>
        </Card>
      </FormControl>
    </div>
  );
};
