import React, { useState } from "react";
import PARALLEX from "../../Static/Parallex.png";
import Parallax from "../../../THEME/components/Parallax/Parallax.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Pricing } from "./BecomeSeller/Pricing";

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

export const CreateGig = () => {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />

      <Grid container spacing={1} justify="center">
        <Grid>
          <h1>Create A Gig</h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
              className={classes.marginTopBottom}
            >
              <MenuItem value="programming">Programming</MenuItem>
              <MenuItem value="photoediting">Photo Editing</MenuItem>
              <MenuItem value="contentwriting">Content Writing</MenuItem>
            </Select>

            <TextField
              id="outlined-multiline-static"
              label="Description about the gig"
              multiline
              rows={4}
              defaultValue=""
              onChange={handleDescChange}
              variant="outlined"
              className={classes.marginTopBottom}
            />

            <TextField
              id="standard-number"
              label="Price"
              type="number"
              onChange={handlePriceChange}
              className={classes.marginTopBottom}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.marginTopBottom}
              >
                Upload Image
              </Button>
            </label>

            <Button
              variant="contained"
              color="primary"
              component="span"
              className={classes.marginTopBottom}
            >
              Save
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
