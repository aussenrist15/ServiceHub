import React from "react";

import "../CSS/Card.css";

export const CorouselCard = (props) => {
  return (
    <div className="container textWhite">
      <h1 className="cardH1">{props.item.name}</h1>
      <h3 className="cardH3">{props.item.description}</h3>
    </div>
  );
};
