import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Priority" {...a11yProps(0)} />
          <Tab label="New" {...a11yProps(1)} />
          <Tab label="Active" {...a11yProps(2)} />
          <Tab label="Late" {...a11yProps(3)} />
          <Tab label="Delivered" {...a11yProps(4)} />
          <Tab label="Completed" {...a11yProps(5)} />
          <Tab label="Cancelled" {...a11yProps(6)} />
          <Tab label="Starred" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          {/* Page content */}
        <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Priority Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">New Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Active Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={3}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Late Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={4}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Delivered Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={5}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Completed Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={6}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Cancelled Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={7}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Starred Orders</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Buyer</th>
                      <th scope="col">Gig</th>
                      <th scope="col">Due On</th>
                      <th scope="col">Total</th>
                      <th scope="col">Note</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Buyer Name
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        gig
                      </td>
                      <td>
                        date
                      </td>
                      <td>
                        data
                      </td>
                      <td>
                        data
                      </td>
                      <td className="text">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
    </div>
  );
}
