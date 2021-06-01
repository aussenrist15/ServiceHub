import React, { useEffect, useState } from "react";

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
import axios from 'axios';

const Balance = () => {

  const [balance, setBalance] = useState({
    balance: 0,
    earnings: 0,
    spent: 0,
  })

  useEffect(() => {
    axios.post("http://localhost:5000/api/v1/user/get-balance", {}, {
      withCredentials: true,
    })
    .then(res => {
      setBalance({
        balance: res.data.balance,
        earnings: res.data.earnings,
        spent: res.data.spent,
      })
    })
  }, [])

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
                    <th scope="col">Service-Hub Balance</th>
                    <th scope="col">{balance.balance} coins</th>
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
                    <td>{balance.earnings} coins</td>
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
                          Your Expense
                          <br></br>
                          </span>
                          
                          
                         
                        </Media>

                      </Media>
                      
                    </th>
                    <td>{balance.spent} coins</td>
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
