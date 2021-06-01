import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";

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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [myRequests, setMyRequests] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDes, setOpenDes] = React.useState(false);
  const [desc, setDesc] = useState({
    category: "",
    description: "",
  });
  const [ratingValue, setRatingValue] = useState(3);
  const [review, setReview] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/my-orders",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setMyOrders(() => res.data.data);
      });
    axios
      .post(
        "http://localhost:5000/api/v1/order/my-requests",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setMyRequests(() => res.data.data);
      });
  }, []);

  const handleShowDesc = (id) => {
    axios
      .post(
        "http://localhost:5000/api/v1/gigs/get-description",
        {
          gigID: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setDesc(res.data.data);
        setTimeout(() => {
          handleClickOpenDes();
        }, 100);
      });
  };

  const handleClickOpenDes = () => {
    setOpenDes(true);
  };

  const handleCloseDes = () => {
    setOpenDes(false);
  };

  const handleApprove = (orderID) => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/book-order",
        {
          orderID: orderID,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };

  const handleCancel = (orderID) => {
    axios
      .post(
        "http://localhost:5000/api/v1/place/cancel-order",
        {
          orderID: orderID,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReview = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (oID, gID) => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/verify-order",
        {
          orderID: oID,
          gigID: gID,
          review: review,
          rating: ratingValue,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        handleClose();
        console.log(res);
        window.location.reload(true);
      });
  };

  const handleUrlChange = (e) => {
    setUrlValue(e.target.value);
  };

  const handleUrlSend = (id) => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/submit-order",
        {
          orderID: id,
          driveLink: urlValue,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };

  const handleReviewRequest = (id) => {
    axios
      .post(
        "http://localhost:5000/api/v1/order/review-order",
        {
          orderID: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };

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
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="My Orders" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* Page content */}
        <Container className="mt--10" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {myOrders.map((order) => {
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
                                    {order.buyer}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <td>{order.due}</td>
                            <td>{order.status}</td>
                            {/* <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          pending
                        </Badge>
                      </td> */}
                          </tr>
                          <tr>
                            <td></td>
                            <td onClick={() => handleShowDesc(order.gigID)}>
                              <span className="mb-0 text-sm">
                                <b> Order Description</b>
                              </span>
                            </td>
                            <td>
                              {order.status === "Pending" && (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleCancel(order._id)}
                                >
                                  Cancel
                                </Button>
                              )}
                            </td>
                            <td>
                              {order.status === "Pending" && (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleApprove(order._id)}
                                >
                                  Approve
                                </Button>
                              )}
                            </td>
                          </tr>
                          {(order.status === "Booked" ||
                            order.status === "Review") && (
                            <tr>
                              <td colSpan="2">
                                <TextField
                                  id="filled-full-width"
                                  value={urlValue}
                                  onChange={(e) => handleUrlChange(e)}
                                  style={{ margin: 8 }}
                                  placeholder="URL"
                                  fullWidth
                                  margin="normal"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  variant="outlined"
                                />
                              </td>
                              <td>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleUrlSend(order._id)}
                                >
                                  Send
                                </Button>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
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
                  <h3 className="mb-0">My Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Seller</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {myRequests.map((request) => {
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
                                    {request.seller}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <td>{request.due}</td>
                            <td>{request.status}</td>
                            <td className="text">
                              {request.status === "Check" && (
                                <>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClickOpen}
                                  >
                                    Complete Order
                                  </Button>
                                  <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="form-dialog-title"
                                  >
                                    <DialogTitle id="form-dialog-title">
                                      Review Order
                                    </DialogTitle>
                                    <DialogContent>
                                      <DialogContentText>
                                        Give your review about the order
                                      </DialogContentText>
                                      <TextField
                                        autoFocus
                                        onChange={(e) => handleReview(e)}
                                        margin="dense"
                                        id="name"
                                        type="email"
                                        fullWidth
                                      />
                                      <br />
                                      <br />
                                      <Box
                                        component="fieldset"
                                        mb={3}
                                        borderColor="transparent"
                                      >
                                        <Typography component="legend">
                                          Rating
                                        </Typography>
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
                                      <Button
                                        onClick={handleClose}
                                        color="primary"
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        onClick={() =>
                                          handleSubmit(
                                            request._id,
                                            request.gigID
                                          )
                                        }
                                        color="primary"
                                      >
                                        Submit
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td onClick={() => handleShowDesc(request.gigID)}>
                              <span className="mb-0 text-sm">
                                <b> Order Description</b>
                              </span>
                            </td>
                            <td></td>
                            {request.status === "Check" && (
                              <td>
                                <Button
                                  onClick={() =>
                                    handleReviewRequest(request._id)
                                  }
                                  color="primary"
                                  variant="contained"
                                >
                                  Review Request
                                </Button>
                              </td>
                            )}
                          </tr>
                          {request.status === "Check" && (
                            <tr>
                              <td colSpan="4">
                                <TextField
                                  id="filled-full-width"
                                  value={request.driveLink}
                                  style={{ margin: 8 }}
                                  placeholder="URL"
                                  fullWidth
                                  margin="normal"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  variant="outlined"
                                />
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
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
            <span>Category: {desc.category}</span>
            <br />
            <span>Description: {desc.description}</span>
            <br />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
