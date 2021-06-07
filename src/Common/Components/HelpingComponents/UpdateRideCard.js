import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import TrendingFlatSharpIcon from "@material-ui/icons/TrendingFlatSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import QueryBuilderSharpIcon from "@material-ui/icons/QueryBuilderSharp";
import EventAvailableSharpIcon from "@material-ui/icons/EventAvailableSharp";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "left",
    height: "100%",
  },
  paper: {
    textAlign: "left",
    padding: "30px",
    "&:hover": {
      backgroundColor: "#d3d3d3",
      transition: "background-color 200ms linear",
      cursor: "pointer",
    },
  },
}));

export const UpdateRideCard = ({ data, deleteBtnShow, deleteFunction }) => {
  const classes = useStyles();
  const history = useHistory();
  function gotoID(id) {
    if(deleteBtnShow){
      history.push(`/user/my-ride/${id}`);
    }
    else{
      history.push(`/user/ride/${id}`);
    }
  }
  return (
    <Paper
      elevation={3}
      className={classes.paper}
      onClick={() => {
        gotoID(data._id);
      }}
    >
      <Grid container>
        <Grid item sm={9}>
          <div className={classes.root}>
            <h1>
              {data.source} <TrendingFlatSharpIcon /> {data.destination}{" "}
            </h1>
            <h4>
              {" "}
              <AccountCircleSharpIcon /> {data.username}
            </h4>
            <h3>
              <QueryBuilderSharpIcon />{" "}
              {data.pickupTime.split("T")[1].split(":")[0]}:
              {data.pickupTime.split("T")[1].split(":")[1]}
            </h3>
            <h3>
              <EventAvailableSharpIcon />{" "}
              {data.pickupTime.split("T")[0].split("-")[2]}-{" "}
              {data.pickupTime.split("T")[0].split("-")[1]}-{" "}
              {data.pickupTime.split("T")[0].split("-")[0]}
            </h3>
          </div>
        </Grid>
        <Grid item sm={3}>
          <DriveEtaIcon fontSize="large" />
        </Grid>
        {deleteBtnShow &&
        <Button
            size="small"
            color="secondary"
            onClick={() => deleteFunction(data._id)}
          >
            Delete
          </Button>
          }
      </Grid>
    </Paper>
  );
};
