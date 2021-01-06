import React from "react";
import HeaderLinks from "../../THEME/components/Header/HeaderLinks.js";
import Header from "../../THEME/components/Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Profile } from "./Profile";
import { Rides } from "./Rides.js";
import { ServiceInfo } from "./ServiceInfo.js";

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
    </div>
  );
};
