import React, { useEffect, useState } from "react";
import "../../CSS/Services.css";
import { GigCard } from "../HelpingComponents/GigCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../../CSS/Card.css";
import AUDI from "../../Static/audi.jpg";
import photoediting from "../../Static/PHOTO.png";
import contentwriting from "../../Static/WRITING.jpeg";
import programming from "../../Static/PROGRAMMING.jpg";
import { SkeletonLoader } from "../HelpingComponents/SkeletonLoader";
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

const Services = () => {
  useEffect(() => {
    setTimeout(function () {
      setLoading((load) => {
        return !load;
      });
    }, 3000);
  }, []);

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/gigs/get-user-gigs",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setGigData(() => res.data.data);
      });
  }, [reRender]);

  function deleteFunction(id) {
    axios
      .post(
        "http://localhost:5000/api/v1/gigs/delete-gig",
        {
          gigID: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setReRender((prev) => {
          return !prev;
        });
      });
  }

  const [loading, setLoading] = useState(false);

  const [gigData, setGigData] = useState([]);
  const classes = useStyles();
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
            if (data.category === "programming") {
              return (
                <Grid item xs={12} sm={4} key={data._id}>
                  <GigCard
                    id={data._id}
                    img={programming}
                    title={data.category}
                    desc={data.desc}
                    price={data.price}
                    deleteBtnShow={true}
                    deleteFunction={deleteFunction}
                  />
                </Grid>
              );
            } else if (data.category === "contentwriting") {
              return (
                <Grid item xs={12} sm={4} key={data._id}>
                  <GigCard
                    id={data._id}
                    img={contentwriting}
                    title={data.category}
                    desc={data.desc}
                    price={data.price}
                    deleteBtnShow={true}
                    deleteFunction={deleteFunction}
                  />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={12} sm={4} key={data._id}>
                  <GigCard
                    id={data._id}
                    img={photoediting}
                    title={data.category}
                    desc={data.desc}
                    price={data.price}
                    deleteBtnShow={true}
                    deleteFunction={deleteFunction}
                  />
                </Grid>
              );
            }
          })
        ) : (
          <SkeletonLoader />
        )}
      </Grid>
    </div>
  );
};

export default Services;
