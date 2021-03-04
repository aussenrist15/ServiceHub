import React from "react";
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
//import {isMobile} from 'react-device-detect';

const Security = () => {
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
              <h6 className="heading-small text-muted mb-4">
                Change Password
              </h6>
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
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col lg="8">
                    <small>8 characters or longer. Combine upper and lowercase letters and numbers.</small>
                  </Col>
                  <Col lg="4">
                    <Button
                      color="default"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
                {/* PHONE VERIFICATION */}
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
                  {/* Connected Devices */}
                  <h6 className="heading-small text-muted mb-4">
                    Connected Devices
                  </h6>
                  
                  {/* Dark table */}
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
                                */}
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
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
            <br />
        </Container>
    </>
  );
};

export default Security;
