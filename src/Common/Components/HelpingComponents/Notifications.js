import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingAnimation } from "./LoadingAnimation";
import axios from "axios";
import "../../CSS/LoadingAnimation.css";
import { useHistory } from "react-router-dom";

import Link from "@material-ui/core/Link";

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
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  function handleClick(type, id) {
    console.log(id);
    axios
      .post(
        "http://localhost:5000/api/v1/notifications/del",
        { id },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (type.includes("place")) history.push("/dashboard/places");
    else if (type.includes("order")) history.push("/dashboard/orders");
    else if (type.includes("ride")) history.push("/dashboard/gigs"); // Rides ka route kisi ne gig set kiya hua is waja se rides pe gigs pe jaa rahe :)
  }
  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    const req = await axios.post(
      "http://localhost:5000/api/v1/notifications/all",
      {},
      { withCredentials: true }
    );

    setNotis(req.data.data);
    setLoading(false);
  };
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();
  const [AllNotis, setNotis] = useState([]);
  return (
    <div>
      {isLoading ? (
        <div className="WIDTH">
          <div className="CONTAINER">
            <div className="VERTICAL">
              <div className="dot-pulse CENTER"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="WIDTH">
          {AllNotis.length > 0 ? (
            AllNotis.map((item) => {
              return (
                <div
                  className="notification"
                  onClick={() => {
                    handleClick(item.type, item._id);
                  }}
                >
                  <Typography>{item.text}</Typography>
                  <hr className="hrdivider"></hr>
                </div>
              );
            })
          ) : (
            <Typography className={classes.padding}>
              No Notifications yet
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
