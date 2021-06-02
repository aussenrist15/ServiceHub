import React, { useEffect } from "react";
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
import GoogleMapReact from "google-map-react";
import { ProfileDialogue } from "./ProfileDialogue";
<link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet"></link>;

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
  const [username, setUsername] = React.useState(null);
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(data);
    setUsername(data.username);
  }, []);
  return (
    <div>
      <ProfileDialogue
        open={open}
        onClose={handleClose}
        username={username}
      ></ProfileDialogue>
      <Card className={classes.root} variant="outlined">
        <br></br>
        <br></br>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            handleClickOpen();
          }}
        >
          View Profile
        </Button>
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
                      Country
                    </label>
                    <p>
                      <small>{data.country}</small>
                    </p>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-city">
                      City
                    </label>
                    <p>
                      <small>{data.city}</small>
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
                      <small>{data.address}</small>
                    </p>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">Property Details</h6>
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
                      <small>{data.propertyType}</small>
                    </p>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-city">
                      Number of Rooms
                    </label>
                    <p>
                      <small>{data.totalRooms}</small>
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
                      <small>{data.guestPlaceType}</small>
                    </p>
                  </FormGroup>
                </Col>
              </Row>
            </div>

            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">Description</h6>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  {data.desc}
                </label>
              </FormGroup>
            </div>

            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">
              Place Accomodation
            </h6>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Number of Guests
                </label>
                <p>
                  <small>{data.totalGuests}</small>
                </p>
              </FormGroup>
              <FormGroup>
                <label className="form-control-label" htmlFor="input-city">
                  Number of Beds
                </label>
                <p>
                  <small>{data.totalBeds}</small>
                </p>
              </FormGroup>
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Number of Bathrooms
                </label>
                <p>
                  <small>{data.totalBathrooms}</small>
                </p>
              </FormGroup>
            </div>

            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">Some Extras</h6>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Basic Amenities
                </label>
                <ul class="list-group list-group-flush">
                  {data.basicAmenities.map((amenity) => {
                    return <li class="list-group-item">{amenity}</li>;
                  })}
                </ul>
              </FormGroup>

              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Securty Amenities
                </label>
                <ul class="list-group list-group-flush">
                  {data.safetyAmenities.map((amenity) => {
                    return <li class="list-group-item">{amenity}</li>;
                  })}
                </ul>
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
