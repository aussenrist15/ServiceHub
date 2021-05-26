import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';

import axios from 'axios';

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Badge,
  Media,
  Table
} from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [myBookings, setMyBookings] = useState([]);
  const [myRides, setMyRides] = useState([]);

  const [open, setOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(3);

  const [review, setReview] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (name, id) => {
    console.log(ratingValue, review, name, id)
    axios.post("http://localhost:5000/api/v1/order/complete-ride", {
      name: name,
      review: review,
      rating: ratingValue,
      rideID: id,
    }, {
      withCredentials: true,
    })
    .then(res => {
      handleClose()
      window.location.reload(true)
    })
  }

  useEffect(() => {
    axios.post("http://localhost:5000/api/v1/ride/get-my-bookings", {}, {
      withCredentials: true,
    })
    .then(res => {
      setMyBookings(() => res.data.data)
    })
    axios.post("http://localhost:5000/api/v1/ride/get-my-rides", {}, {
      withCredentials: true,
    })
    .then(res => {
      setMyRides(() => res.data.data)
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReview = (e) => {
    setReview(e.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="My Rides" {...allProps(0)} />
          <Tab label="My Bookings" {...allProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          {/* Page content */}
        <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">My Rides</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer Name</th>
                      <th scope="col">Source</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Fare</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      myRides.map(ride => {
                        return (
                          <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../assets/img/reimbursement.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {ride.buyer}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {ride.source}
                      </td>
                      <td>
                      {ride.destination}
                      </td>
                      <td>
                      {ride.fare}
                      </td>
                      <td>
                      {ride.status}
                      </td>
                      {/* <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          pending
                        </Badge>
                      </td> */}
                    </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">My Bookings</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Rider Name</th>
                      <th scope="col">Source</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Fare</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      myBookings.map(booking => {
                        return (
                          <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../assets/img/reimbursement.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {booking.username}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {booking.source}
                      </td>
                      <td>
                      {booking.destination}
                      </td>
                      <td>
                      {booking.fare}
                      </td>
                      <td>
                      {booking.status}
                      </td>
                      <td className="text">
                        {booking.status === "Booked" && 
                        <>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Complete Ride
                      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Review Ride</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Give your review about the ride
                          </DialogContentText>
                          <TextField
                            autoFocus
                            onChange={(e) => handleReview(e)}
                            margin="dense"
                            id="name"
                            type="email"
                            fullWidth
                          />
                          <br/><br/>
                          <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating
                              name="simple-controlled"
                              value={ratingValue}
                              onChange={(event, newValue) => {
                                setRatingValue(newValue);
                              }}
                            />
                          </Box>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={() => handleSubmit(booking.username, booking._id)} color="primary">
                            Submit
                          </Button>
                        </DialogActions>
                      </Dialog>
                      </>
                      }
                      </td>
                    </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
                </Card>
              </div>
            </Row>
          </Container>
      
      </TabPanel>
    </div>
  );
}
