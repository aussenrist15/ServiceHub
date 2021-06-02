import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LaptopIcon from "@material-ui/icons/Laptop";
import HomeIcon from "@material-ui/icons/Home";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

import axios from "axios";
// Core Comoponents
import Footer from "../../THEME/components/Footer/Footer.js";

import GridContainer from "../../THEME/components/Grid/GridContainer.js";
import GridItem from "../../THEME/components/Grid/GridItem.js";
import NavPills from "../../THEME/components/NavPills/NavPills.js";
import Parallax from "../../THEME/components/Parallax/Parallax.js";

import DP from "../Static/PROFILE.jpg";
import PARALLEX from "../Static/Parallex.png";
import styles from "../../THEME/assets/jss/material-kit-react/views/profilePage.js";
import { Services } from "./Services.js";
import { Places } from "./Places.js";
import { Rides } from "./Rides.js";

const useStyles = makeStyles(styles);
export const Profile = (props) => {
  const [fullName, setFullName] = useState("");
  const history = useHistory();
  useEffect(() => {
    const chck = localStorage.getItem("isLoggedin");
    if (chck && chck === "true") {
    } else {
      history.push("/");
    }

    let Name = localStorage.getItem("fullname");
    setFullName(Name);
  }, []);

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [completed, setCompleted] = React.useState(true);

  React.useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/user/userdata",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setCompleted(res.data.data[0].completed);
      })
      .catch((err) => console.log(err));

    console.log(completed);
  });
  return (
    <div>
      <Parallax small filter image={PARALLEX} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={DP} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>{fullName}</h1>
                    {/* <h6>Footballer</h6> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                {" "}
                Welcome to Service Hub. A place where you can find all you need{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                {!completed ? (
                  <Alert
                    severity="warning"
                    action={
                      <Button
                        color="inherit"
                        size="small"
                        onClick={() => {
                          history.push("/dashboard/user-profile");
                        }}
                      >
                        Edit
                      </Button>
                    }
                  >
                    Your profile is incomplete. Click here to complete it.
                  </Alert>
                ) : null}
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Services",
                      tabIcon: LaptopIcon,
                      tabContent: <Services />,
                    },
                    {
                      tabButton: "Places",
                      tabIcon: HomeIcon,
                      tabContent: <Places />,
                    },
                    {
                      tabButton: "Rides",
                      tabIcon: LocalTaxiIcon,
                      tabContent: <Rides />,
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
