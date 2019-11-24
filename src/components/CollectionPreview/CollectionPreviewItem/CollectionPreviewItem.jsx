import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import "./CollectionPreviewItem.scss";

import Button from "../../UI/Button/Button";

const CollectionPreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="CollectionPreviewItem">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="footer">
        <span className="name"> {name} </span>
        <span className="price">$ {price} </span>
      </div>
      <Button clicked={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionPreviewItem);
