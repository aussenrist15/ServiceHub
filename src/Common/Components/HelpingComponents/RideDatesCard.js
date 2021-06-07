import React, { useState } from "react";
import {RideDateTimepicker} from "./RideDateTimepicker";
import Rating from '@material-ui/lab/Rating';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

import axios from 'axios';

import { useHistory } from "react-router-dom";

export const RideDatesCard = (props) => {

  const history = useHistory();
  const [open, setOpen] = useState(false);

  let avgRating = 0;
  props.reviews.map((review) => {
    avgRating += review.rating;
  });
  if (avgRating > 0) {
    avgRating /= props.reviews.length;
  }

  const handleRequest = () => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/book-ride",
        {
          owner: props.name,
          rideID: props.rID,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        //history.push("/dashboard/gigs?status=ok");
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showReviews = () => {
    setOpen(true);
  };

    return (
      <>
      <Card style={{ width: "23rem" }}>
        <CardBody>
          <CardTitle>
            {" "}
            <p className="display-4">{props.fare} coins / ride</p>
            <p onClick={showReviews} className="h5">
              <u>
                <em>
                  Rating : {avgRating.toFixed(1)} ({props.reviews.length}{" "}
                  review(s))
                </em>
              </u>
            </p>
          </CardTitle>
          <Button color="primary" onClick={handleRequest} disabled={false}>
            Book
          </Button>
        </CardBody>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.reviews.map((review) => {
              return (
                <>
                  <Card style={{ width: "25rem", backgroundColor: "#fffcfc" }}>
                    <CardBody>
                      <p>Reviewer: {review["reviewer"]}</p>
                      <p>Review: {review.review}</p>
                      <p>Rating: </p>
                      <Rating name="read-only" value={review.rating} />
                    </CardBody>
                  </Card>
                  <br />
                </>
              );
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
    );
};
