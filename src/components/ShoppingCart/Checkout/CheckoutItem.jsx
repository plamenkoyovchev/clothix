import React from "react";
import "./CheckoutItem.scss";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const CheckoutItem = ({ item, removeCheckoutItem }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow arrow-left">&#10094;</span>
        {quantity}
        <span className="arrow arrow-right">&#10095;</span>
      </div>
      <div className="price">${price}</div>
      <div
        className="remove-button"
        onClick={() => removeCheckoutItem(item.id)}
      >
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCheckoutItem: itemId => dispatch(actions.removeCheckoutItem(itemId))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
