import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import DashboardNavbar from "./Navbars/DashboardNavbar"
import Sidebar from "./Sidebar/Sidebar"
import routes from "./routes";

const Dashboard = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if ( props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1 ) 
      {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/dashboard/Index",
          imgSrc: require("./assets/img/logo.png").default,
          imgAlt: "...",
        }}
      />

      <div className="main-content" ref={mainContent}>
        <DashboardNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/dashboard/Index" />
        </Switch>
        <Container fluid>

        </Container>
      </div>
    </>
  );
};

export default Dashboard;
