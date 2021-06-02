import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { ProfileView } from "./ProfileView";

const Index = (props) => {
  return (
    <>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div>
      <ProfileView />
    </>
  );
};

export default Index;
