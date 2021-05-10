import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
    Button,
    CardHeader,
    CardBody,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Container,
    } from "reactstrap";
import GoogleMapReact from 'google-map-react';
<link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet"></link>

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 500,
    maxWidth: 600,
    margin: 50,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  parall: {
    height: 250,
  },
  btn: {
    height: 50,
    marginBottom: 20,
  },
}));

export const PlaceInfo = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Form>
            <h6 className="heading-small text-muted mb-4">
                    Reservation Address
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country/Region
                          </label>
                          <p>
                          <small>{data.country}</small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <p>
                          <small>{data.city}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Street
                          </label>
                          <p>
                          <small>
                            {data.address}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Property Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Property Type
                          </label>
                          <p>
                          <small>{data.propertyType}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Number of Rooms
                          </label>
                          <p>
                          <small>{data.totalRooms}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Type of Place
                          </label>
                          <p>
                          <small>{data.guestPlaceType}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Place Accomodation
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Number of Guests
                          </label>
                          <p>
                          <small>{data.totalGuests}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Number of Beds
                          </label>
                          <p>
                          <small>{data.totalBeds}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Number of Bathrooms
                          </label>
                          <p>
                          <small>{data.totalBathrooms}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Some Extras
                  </h6>
                  <div className="pl-lg-4">
                          <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Basic Amenities
                          </label>
                          <p>
                          <small>{data.basicAmenities}
                            </small></p>
                        </FormGroup>
                      
                          <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Safety Amenities
                          </label>
                          <p>
                          <small>{data.safetyAmenities}
                            </small>
                            </p>
                        </FormGroup>

                 </div>
                 <hr className="my-4" />
               
                <br />
                <br />
         </Form>
        </CardContent>
      </Card>
    </div>
  );
};
