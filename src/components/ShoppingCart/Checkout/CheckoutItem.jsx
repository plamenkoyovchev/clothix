import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">${price}</div>
      <div className="remove-button">&#10007;</div>
    </div>
  );
};

export default CheckoutItem;
