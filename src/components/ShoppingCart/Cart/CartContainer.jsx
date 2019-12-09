import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCartItemsSelector } from "../../../store/selectors/cartSelector.js";
import Cart from "./Cart";

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItemsSelector
});

const CartContainer = compose(withRouter, connect(mapStateToProps))(Cart);

export default CartContainer;
