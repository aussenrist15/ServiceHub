import React, { useState, useEffect } from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LoadingAnimation } from "./HelpingComponents/LoadingAnimation";
import { GigInfo } from "./HelpingComponents/GigInfo";

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
}));

export const ServiceInfo = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  const classes = useStyles();
  const gigDummyData = {
    ownerName: "Name of creator",
    title: "Title",
    ratings: 4.6,
    desc:
      " Description of the gig will go here. Just mkaing this dummy text big to see how it will look on the screen. Bla bla bla blablaDescription of the gig will go here. Just mkaing this dummy textbig to see how it will look on the screen. Bla bla bla blablaDescription of the gig will go here. Just mkaing this dummy textbig to see how it will look on the screen. Bla bla bla bla bla",
  };
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
            {isLoading ? <LoadingAnimation /> : <GigInfo data={gigDummyData} />}
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              className={classes.btn}
            >
              Buy Service
            </Button>
            <br />
            <Button
              variant="contained"
              disabled={isLoading}
              color="secondary"
              className={classes.btn}
            >
              Message Seller
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
