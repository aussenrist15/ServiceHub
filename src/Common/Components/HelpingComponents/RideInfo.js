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

export const RideInfo = (props) => {
  const classes = useStyles();
  const { data} = props;
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Form>
            <h6 className="heading-small text-muted mb-4">
                    Location
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Pick-up
                          </label>
                          <p>
                          <small>
                            {data.source}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Drop-off
                          </label>
                          <p>
                          <small>
                            {data.destination}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Pick-up Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Pick-up Date
                          </label>
                          <p>
                          <small>
                            {data.pickupDate}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Pick-up Time
                          </label>
                          <p>
                          <small>
                            {data.pickupTime}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      </Row>
                  </div>

                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                    Accomodation & Charges
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Number of Passengers
                          </label>
                          <p>
                          <small>
                            {data.passengers}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Total Fare
                          </label>
                          <p>
                          <small>
                            {data.fare}
                            </small>
                        </p>
                        </FormGroup>
                      </Col>
                      </Row>
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
