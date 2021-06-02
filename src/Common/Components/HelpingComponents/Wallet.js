import React, { useState, useEffect } from "react";
import "../../CSS/LoadingAnimation.css";
import axios from "axios";
import currency from "../../Static/WALLET.jpg";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import Button from "@material-ui/core/Button";

export const Wallet = () => {
  const [isloading, setLoading] = useState(true);
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/v1/user/get-balance",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setBalance({
          balance: res.data.balance,
          earnings: res.data.earnings,
          spent: res.data.spent,
        });
      });
  }, []);

  useEffect(() => {
    if (balance) {
      setLoading(false);
    }
  }, [balance]);
  return (
    <div className="WIDTH">
      {isloading ? (
        <div className="WIDTH">
          <div className="CONTAINER">
            <div className="VERTICAL">
              <div className="dot-pulse CENTER"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="wallet">
          <img src={currency} style={{ height: "150px", width: "300px" }}></img>
          <h1>
            {" "}
            <AccountBalanceWalletIcon /> {balance.balance}
          </h1>
          <h1>
            {" "}
            <AttachMoneyIcon /> {balance.earnings}
          </h1>
          <h1>
            {" "}
            <MoneyOffIcon /> {balance.spent}
          </h1>
          <Button variant="contained" style={{ backgroundColor: "skyblue" }}>
            Buy Coins
          </Button>
        </div>
      )}
    </div>
  );
};
