import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

export class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Check-in"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(this.state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      this.state.endDate &&
                      this.state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => this.setState({ startDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Check-out"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(this.state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      this.state.endDate &&
                      this.state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => this.setState({ endDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
};