import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import "./Header.scss";

import { auth } from "../../../shared/utils/firebase-utils";
import CartIcon from "../../ShoppingCart/CartIcon/CartIcon";
import Cart from "../../ShoppingCart/Cart/Cart";

const Header = ({ currentUser }) => {
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="navigation-items">
        <Link to="/shop" className="navigation-item">
          SHOP
        </Link>
        <Link to="/contact" className="navigation-item">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="navigation-item" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth" className="navigation-item">
            SIGN IN
          </Link>
        )}
        <CartIcon
          clicked={() => setShoppingCartVisible(!shoppingCartVisible)}
        />
      </div>
      {shoppingCartVisible ? <Cart /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Header);
