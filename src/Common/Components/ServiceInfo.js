import React, { useState, useEffect } from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LoadingAnimation } from "./HelpingComponents/LoadingAnimation";
import { GigInfo } from "./HelpingComponents/GigInfo";
import { BuyService } from "./BuyService";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderCard } from "./HelpingComponents/OrderCard";

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

export const ServiceInfo = (props) => {
  const history = useHistory();
  function gotoBuy() {
    let ID = props.match.params.id;
    history.push(`/user/buy-service/${ID}`);
    //<a href="BuyService"></a>
  }

  const [gigData, setGigData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/gigs/get-gig",
        {
          gigID: history.location.pathname.split("/")[3],
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setGigData(() => res.data.gigData);
        console.log(res.data.gigData);
      });
  }, []);

  useEffect(() => {
    //
    console.log(gigData);
    if (gigData) {
      setisLoading(false);
    }
  }, [gigData]);
  const classes = useStyles();

  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
            {isLoading ? <LoadingAnimation /> : <GigInfo data={gigData} />}
          </Grid>
          <Grid>
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              history.location.pathname.split("/")[2] === "service" &&
              <OrderCard
                name={gigData.username}
                gID={gigData._id}
                reviews={gigData.reviews}
                price={gigData.price}
              />
            )}
            <br />
            {/* <Button
              onClick={() => {
                gotoBuy();
              }}
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
            </Button> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
