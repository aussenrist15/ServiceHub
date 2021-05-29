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
import { setDate } from 'date-fns/esm';

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
  const [myRequests, setMyRequests] = useState([]);
  const [myPlaces, setMyPlaces] = useState([]);

  const [open, setOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(3);

  const [review, setReview] = useState("")
  const [desc, setDesc] = useState({
    address: "12312313",
    city: "123",
    country: "12312",
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (pID, bID) => {
    axios.post("http://localhost:5000/api/v1/order/complete-stay", {
      placeID: pID,
      review: review,
      rating: ratingValue,
      bookingID: bID,
    }, {
      withCredentials: true,
    })
    .then(res => {
      handleClose()
      console.log(res)
      //window.location.reload(true)
    })
  }

  useEffect(() => {
    axios.post("http://localhost:5000/api/v1/place/get-my-requests", {}, {
      withCredentials: true,
    })
    .then(res => {
      setMyRequests(() => res.data.data)
    })
    axios.post("http://localhost:5000/api/v1/place/get-my-places", {}, {
      withCredentials: true,
    })
    .then(res => {
      setMyPlaces(() => res.data.data)
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReview = (e) => {
    setReview(e.target.value)
  }

  const [openDes, setOpenDes] = React.useState(false);

  const handleClickOpenDes = () => {
    setOpenDes(true);
  };

  const handleCloseDes = () => {
    setOpenDes(false);
  };

  const handleShowDesc = (id) => {
    axios.post("http://localhost:5000/api/v1/place/get-description", {
      placeID: id,
    }, {
      withCredentials: true,
    })
    .then(res => {
      setDesc(res.data.data)
      setTimeout(() => {
        handleClickOpenDes()
      }, 100)
    })
  }

  const handleCancel = (bookingID) => {
    axios.post("http://localhost:5000/api/v1/place/cancel-place", {
      bookingID: bookingID,
    }, {
      withCredentials: true,
    })
    .then(res => console.log(res))
  }

  const handleApprove = (bookingID, placeID, checkIn, checkOut) => {
    axios.post("http://localhost:5000/api/v1/place/book-place", {
      bookingID: bookingID,
      placeID: placeID,
      checkIn: checkIn,
      checkOut: checkOut,
    }, {
      withCredentials: true,
    })
    .then(res => console.log(res))
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
          <Tab label="Requests" {...allProps(0)} />
          <Tab label="My Requests" {...allProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          {/* Page content */}
        <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Requests</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Rentee</th>
                      <th scope="col">Check In</th>
                      <th scope="col">Check Out</th>
                      <th scope="col">Guests</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      myPlaces.map(place => {
                        return (
                          <>
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
                              {place.rentee}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {place.checkIn}
                      </td>
                      <td>
                      {place.checkOut}
                      </td>
                      <td>
                      {place.guests}
                      </td>
                      <td>
                      {place.status}
                      </td>
                      {/* <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          pending
                        </Badge>
                      </td> */}
                    </tr>
                    <tr>
                      <td></td>
                      <td onClick={() => handleShowDesc(place.placeID)}>
                      <span className="mb-0 text-sm">
                             <b> Place Description</b>
                      </span>
                      </td>
                      <td>
                        { place.status === "Pending" &&
                      <Button variant="contained" color="primary" onClick={() => handleCancel(place._id)}>
                        Cancel
                      </Button>
                      }
                      </td>
                      <td>
                        { place.status === "Pending" &&
                      <Button variant="contained" color="primary" onClick={() => handleApprove(place._id, place.placeID, place.checkIn, place.checkOut)}>
                        Approve
                      </Button>
                      }
                      </td>
                    </tr>
                    <br/><br/>
                    </>
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
                    <h3 className="mb-0">My Requests</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Owner</th>
                      <th scope="col">Check In</th>
                      <th scope="col">Check Out</th>
                      <th scope="col">Guests</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      myRequests.map(request => {
                        return (
                          <>
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
                              {request.owner}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                      {request.checkIn}
                      </td>
                      <td>
                      {request.checkOut}
                      </td>
                      <td>
                      {request.guests}
                      </td>
                      <td>
                      {request.status}
                      </td>
                      <td className="text">
                        {request.status === "Booked" && 
                        <>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Complete Stay
                      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Review Place</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Give your review about your stay
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
                          <Button onClick={() => handleSubmit(request.placeID, request._id)} color="primary">
                            Submit
                          </Button>
                        </DialogActions>
                      </Dialog>
                      </>
                      }
                      </td>
                    </tr>
                    <tr>
                    <td></td>
                    <td onClick={() => handleShowDesc(request.placeID)}>
                    <span className="mb-0 text-sm">
                           <b> Place Description</b>
                    </span>
                    </td>
                  </tr>
                  <br/><br/>
                  </>
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
      <Dialog
        open={openDes}
        onClose={handleCloseDes}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Description</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <span>Address: {desc.address}</span><br/>
            <span>City: {desc.city}</span><br/>
            <span>Country: {desc.country}</span><br/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
