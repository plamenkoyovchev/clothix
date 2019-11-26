import React from "react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { createStructuredSelector } from "reselect";
import { getCurrentUserSelector } from "../../../store/selectors/userSelector";
import { cartVisibleSelector } from "../../../store/selectors/cartSelector";

import { ReactComponent as Logo } from "../../../assets/images/crown.svg";

import { auth } from "../../../shared/utils/firebase-utils";
import CartIcon from "../../ShoppingCart/CartIcon/CartIcon";
import Cart from "../../ShoppingCart/Cart/Cart";
import {
  HeaderContainer,
  LogoContainer,
  NavigationItemsContainer,
  NavLinkOption,
  NavLinkDiv
} from "./Header.styles";

const Header = ({ currentUser, cartVisible, toggleCartVisibility }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <NavigationItemsContainer>
        <NavLinkOption to="/shop">SHOP</NavLinkOption>
        <NavLinkOption to="/contact">CONTACT</NavLinkOption>
        {currentUser ? (
          <NavLinkDiv as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </NavLinkDiv>
        ) : (
          <NavLinkOption to="/auth">SIGN IN</NavLinkOption>
        )}
        <CartIcon clicked={toggleCartVisibility} />
      </NavigationItemsContainer>
      {cartVisible ? <Cart /> : null}
    </HeaderContainer>
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
