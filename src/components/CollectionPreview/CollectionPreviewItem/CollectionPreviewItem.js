import React from "react";

import "./CollectionPreviewItem.scss";

const CollectionPreviewItem = ({ id, name, price, imageUrl }) => {
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
        <span className="price"> {price} </span>
      </div>
    </div>
  );
};

export default CollectionPreviewItem;
