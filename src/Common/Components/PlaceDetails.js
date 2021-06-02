import React, { useState, useEffect } from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LoadingAnimation } from "./HelpingComponents/LoadingAnimation";
import { PlaceInfo } from "./HelpingComponents/PlaceInfo";
import { BuyService } from "./BuyService";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cards } from "./HelpingComponents/Cards";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";

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

export const PlaceDetails = (props) => {
  console.log("aa gaya")
  const history = useHistory();
  function gotoBuy() {
    let ID = props.match.params.id;
    history.push(`/user/buy-service/${ID}`);
    //<a href="BuyService"></a>
  }
  const [isLoading, setisLoading] = useState(true);
  const [placeData, setPlaceData] = useState({});
  const [ERROR, setError] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/place/get-place",
        {
          placeID: history.location.pathname.split("/")[3],
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.placeData);
        setPlaceData(() => res.data.placeData);
      });
  }, []);

  useEffect(() => {
    if (ERROR) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [ERROR]);

  const classes = useStyles();
  return (
    <div>
      {ERROR ? <Alert severity="error">{msg}</Alert> : <></>}
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
            {isLoading ? <LoadingAnimation /> : <PlaceInfo data={placeData} />}
          </Grid>
          <Grid>
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              history.location.pathname.split("/")[2] === "place" &&
              <Cards
                name={placeData.username}
                pID={placeData._id}
                fare={placeData.rent}
                dates={placeData.bookingDates}
                reviews={placeData.reviews}
                setError={setError}
                setMsg={setMsg}
              />
            )}
            <br />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
