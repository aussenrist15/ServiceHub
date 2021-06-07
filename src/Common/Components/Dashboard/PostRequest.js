import React from "react";


import OrdersHeader from "./Headers/OrdersHeader.js";
import PlacesNavbar from "./Navbars/PlacesNavbar"

const Places = () => {
  return (
    <>
      <OrdersHeader />
      <PlacesNavbar />
      {/* Page content is in GigsNavbar*/}
    </>
  );
};

export default Places;
