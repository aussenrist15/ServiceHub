import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../CSS/Home.css";
import { Corousel } from "./Corousel";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [signUpView, setsignUpView] = useState(false);
  return (
    <div className="homeContainer">
      <div className={classes.root}>
        <Grid container spacing={3} className="hideOverFlow">
          <Grid item xs={12} sm={6}>
            <h3 className="logo">SERVICE HUB </h3>
            {signUpView ? (
              <SignUp val={signUpView} revertVal={setsignUpView} />
            ) : (
              <SignIn val={signUpView} revertVal={setsignUpView} />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="bodyback">
              <div className="full-screen ">
                <Corousel></Corousel>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
