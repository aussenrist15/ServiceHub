import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import axios from "axios";

const UserHeader = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/user/userdata",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setName(res.data.data[0].first_name);
      });
  }, []);

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-10" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Hello {name}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can edit your profile here
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
