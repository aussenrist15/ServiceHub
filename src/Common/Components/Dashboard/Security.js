import React, { useState, useEffect } from "react";
import BillingHeader from "./Headers/BillingHeader.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Media,
  Form,
  Input,
  Container,
  Table,
  Row,
  Col,
} from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

//import {isMobile} from 'react-device-detect';

const Security = () => {
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [current, setCurrent] = useState("");
  const [newP, setNew] = useState("");
  const [newC, setNewC] = useState("");
  const [severity, setSeverity] = useState("");
  function handleClick() {
    if (current === "" || newP === "" || newC === "") {
      setErr(true);
      setErrMsg("Please fill in all fields");
      setSeverity("error");

      return;
    }
    if (newP !== newC) {
      setErr(true);
      setErrMsg("New Passwords donot match.");
      setSeverity("error");

      return;
    }

    console.log(current, newP, newC);
    axios
      .post(
        "http://localhost:5000/api/v1/user/reset-password",
        {
          oldpassword: current,
          newpassword: newP,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (!res.data.error) {
          setErr(true);
          setErrMsg(res.data.message);
          setSeverity("success");
        }
      });
  }

  return (
    <>
      <BillingHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h3 className="mb-0">Security Settings</h3>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">Change Password</h6>
              {Err ? (
                <Collapse in={Err}>
                  {" "}
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setErr(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    severity={severity}
                  >
                    {ErrMsg}
                  </Alert>{" "}
                </Collapse>
              ) : (
                <></>
              )}
              <br></br>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="3">
                    <label
                      className="form-control-label"
                      htmlFor="input-password"
                    >
                      Current Password
                    </label>
                  </Col>
                  <Col lg="8">
                    <Input
                      className="form-control-alternative"
                      id="input-password"
                      type="password"
                      onChange={(e) => setCurrent(e.target.value)}
                      value={current}
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col lg="3">
                    <label
                      className="form-control-label"
                      htmlFor="input-password"
                    >
                      New Password
                    </label>
                  </Col>
                  <Col lg="8">
                    <Input
                      className="form-control-alternative"
                      id="input-newpassword"
                      type="password"
                      onChange={(e) => setNew(e.target.value)}
                      value={newP}
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col lg="3">
                    <label
                      className="form-control-label"
                      htmlFor="input-password"
                    >
                      Confirm Password
                    </label>
                  </Col>
                  <Col lg="8">
                    <Input
                      className="form-control-alternative"
                      id="input-confirmpassword"
                      type="password"
                      onChange={(e) => setNewC(e.target.value)}
                      value={newC}
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col lg="8">
                    <small>
                      8 characters or longer. Combine upper and lowercase
                      letters and numbers.
                    </small>
                  </Col>
                  <Col lg="4">
                    <Button
                      color="default"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                      }}
                      size="sm"
                    >
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </div>
              {/* <hr className="my-4" />
                
                <h6 className="heading-small text-muted mb-4">
                  Phone Verification
                </h6>

                <div className="pl-lg-4">
                  <Row>
                    <Col lg="8">
                      <small>Your phone is verified with Fiverr. Click Edit to change your phone number</small>
                    </Col>
                    <Col lg="4">
                      <Button
                      color="default"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      >
                      Edit
                      </Button>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col lg="3">
                      <label
                        className="form-control-label"
                        htmlFor="input-number"
                      >
                        Phone Number
                      </label>
                    </Col>
                    <Col lg="8">
                      <Input
                        className="form-control-alternative"
                        id="input-phoneNumber"
                        type="Number"
                      />
                    </Col>
                  </Row>
                </div>
                
                <hr className="my-4" />
                  
                  <h6 className="heading-small text-muted mb-4">
                    Connected Devices
                  </h6>
                  
                  
                  <div className="col">
                    <Card className="bg-default shadow">
                      <Table
                        className="align-items-center table-dark table-flush"
                        responsive
                      >
                        <tbody>
                          <tr>
                            <th scope="row">
                              <Media className="align-items-center">
                                <a
                                  className="avatar mr-3"
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    alt="..."
                                    src={
                                      require("./assets/img/laptop.png")
                                        .default
                                    }
                                  />
                                </a>
                                <Media>
                                  <span className="mb-0 text-sm">
                                {/** if (isMobile) {
                                      <div>Mobile</div>
                                  }
                                  else
                                  <p>Laptop</p>
                                
                                  Chrome 88, Windows
                                  <br></br>
                                  <small>
                                  Last Activity Just Now  
                                  &emsp;
                                  •Lahore, Pakistan
                                  </small>
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <td>
                            <Button
                              color="secondary"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              size="sm"
                            >
                              Sign Out
                            </Button>
                            </td>
                            <td>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </div>
                  <hr className="my-4" /> */}
            </Form>
          </CardBody>
        </Card>
        <br />
      </Container>
    </>
  );
};

export default Security;
