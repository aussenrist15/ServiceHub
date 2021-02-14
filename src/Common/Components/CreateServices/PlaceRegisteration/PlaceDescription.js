import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { classNames } from "classnames";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  marginTopBottom: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
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
  },
  margintop: {
    margintop: 100,
    textAlign: "justify",
    marginLeft: 200,
    marginBlock: 50,
    marginRight: 500,
  },
}));

export const PlaceDescription = (props) => {
  const classes = useStyles();
  const step = props.step;
  const setStep = props.setStep;
  const [description, setDescription] = useState("");
  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <p className={classes.margintop}>
        <h1>Description About Place</h1>
        Mention the best features of your space, any special amenities like fast
        wifi or parking, and what you love about the neighborhood.
      </p>
      <FormControl className={classes.formControl}>
        <TextField
          id="outlined-multiline-static"
          label="Description about the Place"
          multiline
          rows={8}
          defaultValue=""
          onChange={handleDescChange}
          variant="outlined"
          className={classes.marginTopBottom}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.marginTopBottom}
          className={classes.button}
          className={classes.buttonleft}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>

        <Button
          variant="contained"
          color="secondary"
          //className={classes.marginTopBottom}
          className={classes.button}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </Button>
      </FormControl>
    </div>
  );
};
