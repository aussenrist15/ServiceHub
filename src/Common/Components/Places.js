import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import { GigCard } from "./HelpingComponents/GigCard";
import { PlaceCard } from "./HelpingComponents/PlaceCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../CSS/Card.css";
import AUDI from "../Static/audi.jpg";
import { SkeletonLoader } from "./HelpingComponents/SkeletonLoader";
import axios from 'axios';

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

export const Places = () => {
  useEffect(() => {
    setTimeout(function () {
      setLoading((load) => {
        return !load;
      });
    }, 3);
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5000/api/v1/place/all-places",
      {},
      { withCredentials: true }
    )
    .then((res) => {
      setPlaceData(() => res.data.data.results)
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState([]);
  const classes = useStyles();
  // const dummyData = [
  //   {
  //     id: 1,
  //     img: AUDI,
  //     title: "TITLE HERE",
  //     desc: "Description about the gig here",
  //     price: 10,
  //   },
  //   {
  //     id: 2,
  //     img: AUDI,
  //     title: "TITLE HERE",
  //     desc: "Description about the gig here",
  //     price: 10,
  //   },
  //   {
  //     id: 3,
  //     img: AUDI,
  //     title: "TITLE HERE",
  //     desc: "Description about the gig here",
  //     price: 10,
  //   },
  //   {
  //     id: 4,
  //     img: AUDI,
  //     title: "TITLE HERE",
  //     desc: "Description about the gig here",
  //     price: 10,
  //   },
  // ];
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
        {loading ? (
          placeData.map((data) => {
            return (
              <Grid item xs={12} sm={4} key={data._id}>
                <PlaceCard
                  id={data._id}
                  img={AUDI}
                  title={data.city}
                  desc={data.desc}
                  price={data.rent}
                />
              </Grid>
            );
          })
        ) : (
          <SkeletonLoader />
        )}
      </Grid>
    </div>
  );
};
