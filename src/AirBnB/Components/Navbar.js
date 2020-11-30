import React from "react";
import "../CustomCSS/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="header">
        <a href="/">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </a>

        <div className="header__center">
          <input type="text" />
          <SearchIcon />
        </div>

        <div className="header__right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
    </div>
  );
};