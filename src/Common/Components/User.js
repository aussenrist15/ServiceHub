import React from "react";
import HeaderLinks from "../../THEME/components/Header/HeaderLinks.js";
import Header from "../../THEME/components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Profile } from "./Profile";
import { Rides } from "./Rides.js";
import { ServiceInfo } from "./ServiceInfo.js";
import { CreateGig } from "./CreateServices/CreateGig.js";
import { MyServices } from "./MyServices.js";
<<<<<<< HEAD
import { RentPlace } from "./CreateServices/RentPlace";

=======
import { BuyService } from "./BuyService.js";
import { RentPlace } from "./CreateServices/RentPlace";
>>>>>>> 44cdef83d1580d5b7b4c249f6f41483c733612d0
export const User = () => {
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
      <Route path="/user/create-gig" component={CreateGig}></Route>
      <Route path="/user/user-services" component={MyServices}></Route>
<<<<<<< HEAD
=======
      <Route path="/user/buy-service" component={BuyService}></Route>
>>>>>>> 44cdef83d1580d5b7b4c249f6f41483c733612d0
      <Route path="/user/create-place" component={RentPlace}></Route>
    </div>
  );
};
