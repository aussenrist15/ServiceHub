import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import { GigCard } from "./HelpingComponents/GigCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../CSS/Card.css";
import AUDI from "../Static/audi.jpg";
import { SkeletonLoader } from "./HelpingComponents/SkeletonLoader";
import axios from "axios";

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
  useEffect(() => {
    setTimeout(function () {
      setLoading((load) => {
        return !load;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5000/api/v1/gigs/get-all-gigs",
      {},
      { withCredentials: true }
    )
    .then((res) => {
      setGigData(() => res.data.data.results)
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [gigData, setGigData] = useState([]);
  const classes = useStyles();
  const dummyData = [
    {
      id: 1,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 2,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 3,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 4,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 5,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 6,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    },
    {
      id: 7,
      img: AUDI,
      title: "TITLE HERE",
      desc: "Description about the gig here",
      price: 10,
    }
  ];
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
          gigData.map((data) => {
            return (
              <Grid item xs={12} sm={4} key={data._id}>
                <GigCard
                  id={data._id}
                  img={AUDI}
                  title={data.category}
                  desc={data.desc}
                  price={data.price}
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
