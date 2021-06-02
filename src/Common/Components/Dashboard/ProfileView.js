import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import FormDialog from "./FormDialog";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
export const ProfileView = () => {
  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    marginBottom: 12,
    border: 1,
    style: { width: "300px", height: "150x" },
  };

  const [loaded, setLoadded] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [orders, setOrders] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/user/userdata",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setComplete(res.data.data[0].completed);
        setFname(res.data.data[0].first_name);
        setLname(res.data.data[0].last_name);
        setOrders(res.data.data[0].totalCompleteOrders);
        if (res.data.data[0].completed) {
          setAbout(res.data.data[0].about);
          setSkills(res.data.data[0].skills);
          setCountry(res.data.data[0].country);
          setCity(res.data.data[0].city);
        }
      });
  }, []);

  useEffect(() => {
    if (skills) {
      setLoadded(true);
    }
  }, [skills]);

  return (
    <div>
      <Card
        className="card-profile shadow"
        style={{ width: "50%", marginLeft: "20vw" }}
      >
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3">
            <div className="card-profile-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("../../Static/PROFILE.jpg").default}
                />
              </a>
            </div>
          </Col>
        </Row>
        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div className="d-flex justify-content-between"></div>
          <br></br>
          <br></br>
        </CardHeader>
        <CardBody className="pt-0 pt-md-4">
          <br></br>
          <br></br>

          <div className="text-center">
            <h2>
              {fname} {lname}
            </h2>
            <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              {complete ? city : null}, {complete ? country : null}
            </div>
            <p>{complete ? about : null}</p>
            <hr className="my-4" />

            {complete && loaded ? (
              <div>
                <h4>Skills</h4>
                <ul style={{ whiteSpace: "nowrap" }}>
                  {" "}
                  {skills.map((it) => {
                    return (
                      <li style={{ display: "inline" }}>
                        {it} {"     "}
                      </li>
                    );
                  })}{" "}
                </ul>
              </div>
            ) : null}

            {complete ? (
              <div>
                <h4>Total Orders Completed</h4>
                <h3>{orders}</h3>
              </div>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
