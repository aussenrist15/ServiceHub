import React from "react";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import "../CSS/ServiceInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
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
}));

export const ServiceInfo = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax small filter image={PARALLEX} />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={8} sm={3}>
            <h1>Title Here</h1>
            <h4>Name of creator here</h4>
            <p>
              Description of the gig will go here. Writing a long paragraph just
              to check the layout Description of the gig will go here. Writing a
              long paragraph just to check the layoutDescription of the gig will
              go here. Writing a long paragraph just to check the
              layoutDescription of the gig will go here. Writing a long
              paragraph just to check the layout
            </p>
            <br></br>
            <br></br>
            <h4>About the creator</h4>
            <br></br>
            <br></br>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Name of the creator
                </Typography>
                <Typography variant="h5" component="h2">
                  Rating: 5 star
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Country
                </Typography>
                <Typography variant="body2" component="p">
                  Joined Since
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View More from Him</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
