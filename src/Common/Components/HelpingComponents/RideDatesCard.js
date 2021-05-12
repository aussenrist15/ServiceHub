import React from "react";
import {RideDateTimepicker} from "./RideDateTimepicker";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

export class RideDatesCard extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "23rem" }}>
          <CardBody>
            <CardTitle> <p className="display-4">$14 / trip</p>
            <p className="h5"><u><em>
              Rating : 4.7  (21 reviews)
              </em></u></p>
              </CardTitle>
            <RideDateTimepicker />
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Let's Bounce
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
};
