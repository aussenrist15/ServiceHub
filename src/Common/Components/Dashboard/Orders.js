import React from "react";


import OrdersHeader from "./Headers/OrdersHeader.js";
import OrdersNavbar from "./Navbars/OrdersNavbar"

const Orders = () => {
  return (
    <>
      <OrdersHeader />
      <OrdersNavbar />
      {/* Page content is in OrdersNavbar*/}
    </>
  );
};

export default Orders;
