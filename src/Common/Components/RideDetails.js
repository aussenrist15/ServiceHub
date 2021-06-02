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
import { RideDatesCard } from "./HelpingComponents/RideDatesCard";
import axios from "axios";

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
  function bookRide(username) {
    axios
      .post(
        "http://localhost:5000/api/v1/order/book-ride",
        {
          rideID: history.location.pathname.split("/")[3],
          owner: username,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        history.push("/dashboard/gigs");
      });
  }
  const [isLoading, setisLoading] = useState(true);
  const [rideData, setRideData] = useState({});
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 1000);
  // }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/ride/get-ride",
        {
          rideID: history.location.pathname.split("/")[3],
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("Check ", res.data.reviews);
        setRideData(() => res.data.rideData);
        setReviews(() => res.data.reviews);
        setisLoading(false);
      });
  }, []);

  console.log("RRR ", rideData)

  const classes = useStyles();
  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
            {isLoading ? <LoadingAnimation /> : <RideInfo data={rideData} />}
          </Grid>
          <Grid>
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              history.location.pathname.split("/")[2] === "ride" &&
              <RideDatesCard fare={rideData.fare} name={rideData.username} rID={rideData._id} reviews={reviews} />
            )}
            <br />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
