import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

import DP from "../../../Static/PROFILE.jpg";

const DashboardNavbar = (props) => {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    let Name = localStorage.getItem("fullname");
    setFullName(Name);
  }, []);
  return (
    <div>
      <div>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/user"
            >
              <HomeIcon /> HOME
            </Link>

            {/* <Nav className="align-items-center d-none d-md-flex" navbar></Nav> */}
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default DashboardNavbar;
