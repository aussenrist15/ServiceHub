import React from "react";
import {RideDateTimepicker} from "./RideDateTimepicker";
import Rating from '@material-ui/lab/Rating';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

export const RideDatesCard = (props) => {
  console.log(props)
    return (
      <>
        <Card style={{ width: "30rem" }}>
          <CardBody>
            <CardTitle> <p className="display-4">Reviews</p>
            </CardTitle>
            {props.reviews[0].rideReviews.map(review => {
              console.log(props)
              return (
                <>
                <Card style={{ width: "25rem", backgroundColor: "#fffcfc" }}>
                  <CardBody>
                    <p>Reviewer: {review["reviewer"]}</p>
                    <p>Review: {review.review}</p>
                    <p>Rating: </p>
                    <Rating
                              name="read-only"
                              value={review.rating}
                            />
                  </CardBody>
                </Card>
                <br/>
                </>
              )
            })}
          </CardBody>
        </Card>
      </>
    );
};
