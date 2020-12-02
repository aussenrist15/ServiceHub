import React, { useEffect } from "react";
import "../CSS/Services.css";
export const Services = () => {
  useEffect(() => {
    console.log("Component rendered");
  }, []);
  return (
    <div>
      <h1 className="heading">This is the services tab</h1>
    </div>
  );
};
