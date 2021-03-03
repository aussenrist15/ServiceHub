import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Media,
  Table,
} from "reactstrap";
// core components
import BalanceHeader from "./Headers/BalanceHeader.js";

const Balance = () => {
  return (
    <>
      <BalanceHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">My Balance</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
               <thead className="thead-dark">
                  <tr>
                    <th scope="col">Servi-Hub Balance</th>
                    <th scope="col">Total $0.00</th>
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
                              require("./assets/img/earning.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                          Your Earnings
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                    </td>
                   </tr>
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
                              require("./assets/img/reimbursement.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                          Your Reimbursements
                          <br></br>
                          <small>Funds that were credited back to your account for canceled orders.
                          </small>
                          </span>
                          
                          
                         
                        </Media>

                      </Media>
                      
                    </th>
                    <td>$1,800 USD</td>
                    </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      
      </Container>
    </>
  );
};

export default Balance;
