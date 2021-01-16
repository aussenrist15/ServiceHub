import React from "react";

import "../CSS/Card.css";

export const CorouselCard = (props) => {
  return (
    <div className="container textWhite">
      <h1>{props.item.name}</h1>
      <h3>{props.item.description}</h3>
    </div>
  );
};
