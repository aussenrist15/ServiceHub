import React, { useState } from "react";

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

const useStyles = makeStyles((theme) => ({
  marginTopBottom: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
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
  button: {
    margin: theme.spacing(0),
    width: 50,
  },
  buttonleft: {
    marginLeft: 450,
    width: 50,
    height: 37,
  },
  margintop: {
    margintop: 100,
    textAlign: "justify",
    marginLeft: 200,
    marginBlock: 50,
    marginRight: 500,
  },
  heading: {
    position: "relative",
    marginLeft: 190,
  },
}));

export const PlaceDescription = (props) => {
  const classes = useStyles();
  const step = props.step;
  const setStep = props.setStep;

  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid>
          <h1 className={classes.heading}>Description About Place</h1>
          <p className={classes.margintop}>
            Mention the best features of your space, any special amenities like
            fast wifi or parking, and what you love about the neighborhood.
          </p>
          <Card
            className={classes.root}
            variant="outlined"
            className={classes.margintop}
          >
            <CardContent>
              <FormControl className={classes.formControl}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description about the Place"
                  multiline
                  rows={8}
                  defaultValue=""
                  onChange={(e) => props.handleDescChange(e.target.value)}
                  variant="outlined"
                  className={classes.marginTopBottom}
                />

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
                    //   className={classes.btn}
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  >
                    Next
                  </Button>
                </CardActions>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
