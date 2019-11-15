import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="navigation-items">
        <Link to="/auth" className="navigation-item">
          SIGN IN
        </Link>
        <Link to="/shop" className="navigation-item">
          SHOP
        </Link>
        <Link to="/contact" className="navigation-item">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
