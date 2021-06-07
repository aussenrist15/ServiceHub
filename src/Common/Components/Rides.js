import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import { GigCard } from "./HelpingComponents/GigCard";
import { RideCard } from "./HelpingComponents/RideCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../CSS/Card.css";
import AUDI from "../Static/audi.jpg";
import { SkeletonLoader } from "./HelpingComponents/SkeletonLoader";
import axios from "axios";
import { UpdateRideCard } from "./HelpingComponents/UpdateRideCard";

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

export const Rides = () => {
  useEffect(() => {
    setTimeout(function () {
      setLoading((load) => {
        return !load;
      });
    }, 3);
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/ride/all-rides",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setRideData(() => res.data.data);
      });
  }, []);

  const [loading, setLoading] = useState(false);
  const [rideData, setRideData] = useState([]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {loading ? (
          rideData.map((data) => {
            return (
              data.status !== "Completed" && (
                <Grid item xs={12} sm={12} key={data._id}>
                  {/* <RideCard
                    id={data._id}
                    img={AUDI}
                    title={data.source}
                    desc={data.desc}
                    price={data.fare}
                    status={data.status}
                  /> */}
                  <UpdateRideCard data={data} />
                </Grid>
              )
            );
          })
        ) : (
          <SkeletonLoader />
        )}
      </Grid>
    </div>
  );
};
