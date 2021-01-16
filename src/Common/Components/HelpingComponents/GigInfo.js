import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

export const GigInfo = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.ownerName}
          </Typography>
          <Typography variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Rating: {data.ratings}
          </Typography>
          <Typography variant="body2" component="p">
            About
            <br />
            {data.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
