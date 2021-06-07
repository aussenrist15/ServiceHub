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

export const GigInfo = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const classes = useStyles();
  const { username, category, desc, duration } = props.data;
  return (
    <div>
      <ProfileDialogue
        open={open}
        onClose={handleClose}
        username={username}
      ></ProfileDialogue>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Form>
            <h6 className="heading-small text-muted mb-4">Gig</h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Name of Creator
                    </label>
                    <p onClick={handleClickOpen}>
                      <small>{username}</small>
                    </p>
                    <Button
                      size="sm"
                      color="skyblue"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickOpen();
                      }}
                    >
                      View Profile
                    </Button>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-city"
                    ></label>
                    <p>
                      <small></small>
                    </p>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Category
                    </label>
                    <p>
                      <small>{category}</small>
                    </p>
                  </FormGroup>
                </Col>
              </Row>
            </div>

            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">About</h6>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Description
                </label>
                <p>
                  <small>{desc}</small>
                </p>
              </FormGroup>
            </div>
            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">Duration</h6>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Time
                </label>
                <p>
                  <small>{duration} Days</small>
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
