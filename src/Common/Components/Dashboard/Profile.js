import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";

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
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
// core components
import UserHeader from "./Headers/UserHeader.js";

const Profile = () => {
  const [age, setAge] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillTemp, setSkillTmp] = useState(null);
  const [about, setAbout] = useState(null);
  const [msg, setMsg] = useState(false);
  const [severity, setSeverity] = useState(false);

  const [err, setErr] = useState(false);

  function handleClick() {
    if (!age || !city || !country || skills.length === 0 || !about) {
      setErr(true);
      setMsg("Please enter all the fields");
      setSeverity("error");
      return;
    }

    axios
      .post(
        "http://localhost:5000/api/v1/user/complete-profile",
        {
          age,
          city,
          country,
          skills,
          about,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (!res.data.error) {
          setErr(true);
          setMsg("Successfully updated profile. Enjoy using Service Hub");
          setSeverity("success");
        } else {
          setErr(true);
          setMsg("Server has refused connection. Please try again");
          setSeverity("error");
        }
      });
  }

  useEffect(() => {
    if (err) {
      setTimeout(() => {
        setErr(false);
      }, 3000);
    }
  }, [err]);

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                      }}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              {err ? <Alert severity={severity}>{msg}</Alert> : null}
              <CardBody>
                <Form>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Personal Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Age
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="Age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="City"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <h6 className="heading-small text-muted mb-4">My Skills</h6>

                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            placeholder="Add Skill"
                            type="text"
                            value={skillTemp}
                            onChange={(e) => setSkillTmp(e.target.value)}
                          />
                        </FormGroup>
                        {skills.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Button
                            color="success"
                            onClick={(e) => {
                              e.preventDefault();
                              setSkills([...skills, skillTemp]);
                              setSkillTmp("");
                            }}
                          >
                            Add
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        rows="4"
                        type="textarea"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  marginBottom: 12,
  border: 1,
  style: { width: "300px", height: "150x" },
};
export default Profile;
