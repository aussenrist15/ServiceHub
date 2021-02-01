import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LaptopIcon from "@material-ui/icons/Laptop";
import HomeIcon from "@material-ui/icons/Home";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

// Core Comoponents
import Header from "../../THEME/components/Header/Header.js";
import Footer from "../../THEME/components/Footer/Footer.js";

import GridContainer from "../../THEME/components/Grid/GridContainer.js";
import GridItem from "../../THEME/components/Grid/GridItem.js";
import HeaderLinks from "../../THEME/components/Header/HeaderLinks.js";
import NavPills from "../../THEME/components/NavPills/NavPills.js";
import Parallax from "../../THEME/components/Parallax/Parallax.js";

import DP from "../Static/kdb.jpg";
import styles from "../../THEME/assets/jss/material-kit-react/views/profilePage.js";
import { Services } from "./Services.js";
import { Places } from "./Places.js";
import { Rides } from "./Rides.js";

const useStyles = makeStyles(styles);
export const Profile = (props) => {
  const history = useHistory();
  useEffect(() => {
    const chck = localStorage.getItem("isLoggedin");
    if (chck && chck === "true") {
    } else {
      history.push("/");
    }
  }, []);

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Parallax small filter image={DP} />
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
                    <h3 className={classes.title}>Kevin De Bruyne</h3>
                    <h6>Footballer</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>Footballer at Manchester City. </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
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
