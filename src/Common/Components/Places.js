import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import { GigCard } from "./HelpingComponents/GigCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../CSS/Card.css";
import AUDI from "../Static/audi.jpg";
import { SkeletonLoader } from "./HelpingComponents/SkeletonLoader";

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
    }, 3000);
  }, []);
  const [loading, setLoading] = useState(false);
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
          dummyData.map((data) => {
            return (
              <Grid item xs={12} sm={4} key={data.id}>
                <GigCard
                  id={data.id}
                  img={data.img}
                  title={data.title}
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
