import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PARALLEX from "../Static/Parallex.png";
import Parallax from "../../THEME/components/Parallax/Parallax.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NavPills from "../../THEME/components/NavPills/NavPills.js";
import styles from "../../THEME/assets/jss/material-kit-react/views/profilePage.js";

//Icons
import LaptopIcon from "@material-ui/icons/Laptop";
import HomeIcon from "@material-ui/icons/Home";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

// My Components
import Services from "./UserServices/Services.js";
import Places from "./UserServices/Places.js";
import Rides from "./UserServices/Rides.js";


const myStyle = makeStyles(styles);

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

export const MyServices = () => {
  const classes = useStyles();
  const navClasses = myStyle();

  return (
    <div>
      <Parallax small filter image={PARALLEX} className={classes.parall} />
      <div>
        <Grid container spacing={1} justify="center">
          <Grid>
            <h1>My Services</h1>
          </Grid>
        </Grid>
        <Grid container spacing={1} justify="center">
          <Grid>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
