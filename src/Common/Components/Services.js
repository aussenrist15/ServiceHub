import React, { useEffect } from "react";
import "../CSS/Services.css";
import { GigCard } from "./HelpingComponents/GigCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../CSS/Card.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="mtb">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className="mtb bt"
        />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <GigCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <GigCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <GigCard />
        </Grid>
      </Grid>
    </div>
  );
};
