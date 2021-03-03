import React from "react";


import OrdersHeader from "./Headers/OrdersHeader.js";
import GigsNavbar from "./Navbars/GigsNavbar"

const Gigs = () => {
  return (
    <>
      <OrdersHeader />
      <GigsNavbar />
      {/* Page content is in GigsNavbar*/}
    </>
  );
};

export default Gigs;
