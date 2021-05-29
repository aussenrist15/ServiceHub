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

export const Cards = (props) => {
    const classes = useStyles();
    const [guests, setGuests] = useState();
    const [open, setOpen] = useState(false);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    const [state, setState] = useState({
      startDate: new Date(),
      endDate: new Date(),
    })

    let avgRating = 0
    props.reviews.map(review => {
      avgRating += review.rating
    })
    avgRating /= props.reviews.length

    const handleRequest = () => {
      axios.post("http://localhost:5000/api/v1/place/request-place", {
        owner: props.name,
        placeID: props.pID,
        checkIn: state.startDate._d,
        checkOut: state.endDate._d,
        guests: guests,
      }, {
        withCredentials: true,
      })
      .then(res => console.log(res))
    }

    const handleChangeGuests = (value) => {
      setGuests(value)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const showReviews = () => {
      setOpen(true)
    }

    var yesterday = moment().subtract( 1, 'day' );
    var day1 = moment("2021-6-5");
    var day2 = moment("2021-6-10");
  var valid = function( current ){
    for(let i = 0; i < props.dates.length; i++){
      if (current < moment(props.dates[i]["checkIn"].split('T')[0]) || current > moment(props.dates[i]["checkOut"].split('T')[0])){

      }
      else{
        return false
      }
    }
    return true
  };

    return (
      <>
        <Card style={{ width: "23rem" }}>
          <CardBody>
            <CardTitle> <p className="display-4">$14 / night</p>
            <p onClick={showReviews} className="h5"><u><em>
              Rating : {avgRating.toFixed(1)}  ({props.reviews.length} reviews)
              </em></u></p>
              </CardTitle>
            {/* <Datepicker /> */}
            <Row>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Check-in"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      state.startDate &&
                      state.endDate &&
                      state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      state.startDate &&
                      state.endDate &&
                      new Date(state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      state.endDate &&
                      state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => setState((prev) => {
                    return {
                      ...prev,
                      startDate: e,
                    }
                  })}
                  isValidDate={valid}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Check-out"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      state.startDate &&
                      state.endDate &&
                      state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      state.startDate &&
                      state.endDate &&
                      new Date(state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      state.endDate &&
                      state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => setState((prev) => {
                    return {
                      ...prev,
                      endDate: e,
                    }
                  })}
                  isValidDate={valid}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Guests</InputLabel>
        <Select
          native
          value={guests}
          onChange={(e) => handleChangeGuests(e.target.value)}
          label="Guests"
          inputProps={{
            name: 'guests',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={2}>Two</option>
          <option value={5}>Five</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            <Button
              color="primary"
              href="#pablo"
              onClick={handleRequest}
              disabled={false}
            >
              Reserve
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
