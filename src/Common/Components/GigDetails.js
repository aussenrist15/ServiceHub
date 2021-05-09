import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Container,
    } from "reactstrap";
<link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet"></link>

export const GigDetails = () => {
 return (

    <div className="header bg-gradient-green shadow pb-10 pt-5 pt-md-8 ">
      <Container className="mt--10" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h3 className="mb-0">Your Gig Details</h3>
          </CardHeader>
          <CardBody>
            <Form>
            <h6 className="heading-small text-muted mb-4">
                    Gig 
                  </h6>
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
                          <Input
                            disabled
                            className="form-control-alternative"
                            id="input-country"
                            defaultValue="ABC"
                            variant="filled"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Title
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            id="input-city"
                            defaultValue="ABC"
                            variant="filled"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Rating
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            id="input-postal-code"
                            defaultValue="ABC"
                            variant="filled"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                <h6 className="heading-small text-muted mb-4">
                    About
                  </h6>
                  <div className="pl-lg-4">
                      <Row>
                        <Col lg="8">
                          <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Description
                          </label>
                            <Input 
                            disabled
                            type="textarea" 
                            name="text" 
                            id="exampleText" 
                            rows={4}
                            //label="Decribe what you want"
                            multiline
                            defaultValue="bJJANJdDkmD"
                            //variant="outlined"
                        />
                        </FormGroup>
                        </Col>
                      </Row> 
                 </div>
                 <hr className="my-4" />
                <div className="pl-lg-4">
                
              <div class="form-group form-file-upload form-file-multiple">
                  <div class="input-group">
                      <span class="input-group-btn">
                          <Button outline color="info" type="button" class="btn btn-fab btn-round btn-primary">
                          <i class="ni ni-bold-left"><br /> Go Back</i>
                          </Button>
                          &emsp;&emsp;&emsp;
                          <Button outline color="success" type="button" class="btn btn-fab btn-round btn-primary">
                            <i class="ni ni-bold-right"><br /> Go for it</i>
                          </Button>
                      </span>
                  </div>
                </div>
                <br />
                <br />
                </div>
         </Form>
        </CardBody>
      </Card>
      <br />
    </Container>
  </div>
  );
};