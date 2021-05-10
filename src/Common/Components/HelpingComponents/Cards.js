import React from "react";
import {Datepicker} from "./Datepicker";
import {Guestpicker} from "./Guestpicker";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

export class Cards extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "23rem" }}>
          <CardBody>
            <CardTitle> <p className="display-4">$14 / night</p>
            <p className="h5"><u><em>
              Rating : 4.7  (21 reviews)
              </em></u></p>
              </CardTitle>
            <Datepicker />
            <Guestpicker />
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Reserve
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
};
