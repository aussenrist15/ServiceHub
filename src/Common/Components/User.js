import React from "react";
import HeaderLinks from "../../THEME/components/Header/HeaderLinks.js";
import Header from "../../THEME/components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Profile } from "./Profile";
import { Rides } from "./Rides.js";
import { ServiceInfo } from "./ServiceInfo.js";
import { CreateGig } from "./CreateServices/CreateGig.js";
import { MyServices } from "./MyServices.js";

import { RentPlace } from "./CreateServices/RentPlace";
import { BuyService } from "./BuyService.js";

import { ShareRide } from "./CreateServices/ShareRide";

import { RideDetails } from "./RideDetails";

import { PlaceDetails } from "./PlaceDetails";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

import axios from "axios";
import zIndex from "@material-ui/core/styles/zIndex";

export const User = () => {
  const [completed, setCompleted] = React.useState(true);

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />

      <Route path="/user/" exact component={Profile}></Route>
      <Route path="/user/service/:id" component={ServiceInfo}></Route>
      <Route path="/user/my-service/:id" component={ServiceInfo}></Route>
      <Route path="/user/create-gig" component={CreateGig}></Route>
      <Route path="/user/user-services" component={MyServices}></Route>

      {/* <Route path="/user/buy-service" component={BuyService}></Route> */}

      <Route path="/user/buy-service/:id" component={BuyService}></Route>
      <Route path="/user/create-place" component={RentPlace}></Route>
      <Route path="/user/create-ride" component={ShareRide}></Route>
      <Route path="/user/my-place/:id" component={PlaceDetails}></Route>
      <Route path="/user/ride/:id" component={RideDetails}></Route>
      <Route path="/user/my-ride/:id" component={RideDetails}></Route>
      <Route path="/user/place/:id" component={PlaceDetails}></Route>
    </div>
  );
};
