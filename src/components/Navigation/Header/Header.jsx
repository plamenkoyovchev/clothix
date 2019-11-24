import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { createStructuredSelector } from "reselect";
import { getCurrentUserSelector } from "../../../store/selectors/userSelector";
import { cartVisibleSelector } from "../../../store/selectors/cartSelector";

import { ReactComponent as Logo } from "../../../assets/images/crown.svg";
import "./Header.scss";

import { auth } from "../../../shared/utils/firebase-utils";
import CartIcon from "../../ShoppingCart/CartIcon/CartIcon";
import Cart from "../../ShoppingCart/Cart/Cart";

const Header = ({ currentUser, cartVisible, toggleCartVisibility }) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container" activeClassName="active-link">
        <Logo className="logo" />
      </NavLink>
      <div className="navigation-items">
        <NavLink
          to="/shop"
          className="navigation-item"
          activeClassName="active-link"
        >
          SHOP
        </NavLink>
        <NavLink
          to="/contact"
          className="navigation-item"
          activeClassName="active-link"
        >
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="navigation-item" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink
            to="/auth"
            className="navigation-item"
            activeClassName="active-link"
          >
            SIGN IN
          </NavLink>
        )}
        <CartIcon clicked={toggleCartVisibility} />
      </div>
      {cartVisible ? <Cart /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUserSelector,
  cartVisible: cartVisibleSelector
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartVisibility: () => dispatch(actions.toggleCartVisibility())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
