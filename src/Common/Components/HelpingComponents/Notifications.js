import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingAnimation } from "./LoadingAnimation";
import "../../CSS/LoadingAnimation.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  padding: {
    padding: 20,
    maxWidth: 500,
  },
});

const Notifications = () => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();

  return (
    <div>
      {isLoading ? (
        <div className="WIDTH">
          <div className="dot-pulse CENTER"></div>
        </div>
      ) : (
        <div className={classes.padding}>
          <Typography className={classes.padding}>Notification 1</Typography>
          <Typography className={classes.padding}>Notification 1</Typography>
          <Typography className={classes.padding}>Notification 1</Typography>
        </div>
      )}
    </div>
  );
};

export default Notifications;
