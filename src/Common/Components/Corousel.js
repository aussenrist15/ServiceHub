import React from "react";
import Carousel from "react-material-ui-carousel";

import { CorouselCard } from "./CorouselCard";

export const Corousel = () => {
  var items = [
    {
      name: "Rent A Place",
      description:
        "Search our portal for a number of places to stay on a holiday all around the world. Or maybe rent our yours.",
    },
    {
      name: "Share A Ride",
      description:
        "Find ride-partners who are going in the same direction and share a trip. Or maybe put a ride of your own to share.",
    },
    {
      name: "Get A Service",
      description:
        "Find top freelancers on our portal and get your work done! Or create a gig for yourself and start earning!",
    },
  ];
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return <CorouselCard item={props.item}></CorouselCard>;
}
