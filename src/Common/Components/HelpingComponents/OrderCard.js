import React, { useState } from "react";
import {Datepicker} from "./Datepicker";
import {Guestpicker} from "./Guestpicker";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const OrderCard = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    let avgRating = 0
    props.reviews.map(review => {
      avgRating += review.rating
    })
    if(avgRating > 0){
      avgRating /= props.reviews.length
    }
    
    const handleRequest = () => {
      axios.post("http://localhost:5000/api/v1/order/place-order", {
        seller: props.name,
        gigID: props.gID,
      }, {
        withCredentials: true,
      })
      .then(res => console.log(res))
    }

    const handleClose = () => {
      setOpen(false)
    }

    const showReviews = () => {
      setOpen(true)
    };

    return (
      <>
        <Card style={{ width: "23rem" }}>
          <CardBody>
            <CardTitle> <p className="display-4">$14 / order</p>
            <p onClick={showReviews} className="h5"><u><em>
            Rating : {avgRating.toFixed(1)}  ({props.reviews.length} review(s))
              </em></u></p>
              </CardTitle>
            <Button
              color="primary"
              onClick={handleRequest}
              disabled={false}
            >
              Request
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
          {props.reviews.map(review => {
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
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </>
    );
};
