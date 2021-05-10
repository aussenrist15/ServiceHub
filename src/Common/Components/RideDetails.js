import React, { useState, useEffect } from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LoadingAnimation } from "./HelpingComponents/LoadingAnimation";
import { RideInfo } from "./HelpingComponents/RideInfo";
import { BuyService } from "./BuyService";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {RideCard} from "./HelpingComponents/RideCard"
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

export const RideDetails = (props) => {
  const history = useHistory();
  function gotoBuy() {
    let ID = props.match.params.id;
    history.push(`/user/buy-service/${ID}`);
    //<a href="BuyService"></a>
  }
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  const classes = useStyles();
  const rideDummyData = {
    username: "Name of creator",
    source: "Title",
    destination: "Title",
    pickupDate: "Title",
    pickupTime: "Title",
    passengers: "Title",
    fare: "Title",
    desc:
      " Description of the gig will go here. Just mkaing this dummy text big to see how it will look on the screen. Bla bla bla blablaDescription of the gig will go here. Just mkaing this dummy textbig to see how it will look on the screen. Bla bla bla blablaDescription of the gig will go here. Just mkaing this dummy textbig to see how it will look on the screen. Bla bla bla bla bla",
  };
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
          {isLoading ? <LoadingAnimation /> : <RideInfo data={rideDummyData} />}
          </Grid>
          <Grid>
          {isLoading ? <LoadingAnimation /> : <RideCard />}
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
