import React from "react";
import AcceptTerms from "./HelpingComponent/AcceptTerms"
// reactstrap components
import {
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
// core components
import BillingHeader from "./Headers/BillingHeader";

const BillingInfo = () => {
  return (
    <>
      <BillingHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h3 className="mb-0">My Billing Account</h3>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                      Username
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                      Email address
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        placeholder="jesse@example.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
                {/* Account */}
                <h6 className="heading-small text-muted mb-4">
                Account information
                </h6>
                <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                      >
                      Company Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-companyName"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                      >
                      VAT Number
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-vatNumber"
                        type="Number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">
              Contact information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                      Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        id="input-address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
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
                      Country
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-country"
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
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                   
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                Invoice
                </h6>
              <FormGroup>
              <Input
                className="form-control-alternative"
                id="input-country"
                type="checkbox"
              />
              <label htmlFor="customCheck5">
              Yes, email my billing info and original invoices.
              </label>
            </FormGroup>
          </div>
                
               {/**
                  <div className="pl-lg-4">              
                    <Button
                      color="default"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Save Changes
                    </Button>
                  </div>
                   */} 
              <AcceptTerms />
            </Form>
          </CardBody>
        </Card>
        <br />
      </Container>
    </>
  );
};

export default BillingInfo;
