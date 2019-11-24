import React from "react";
import "./CartItem.scss";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

const CartItem = ({ item, removeItem }) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <div className="CartItem">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: itemId => dispatch(actions.removeCheckoutItem(itemId))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
