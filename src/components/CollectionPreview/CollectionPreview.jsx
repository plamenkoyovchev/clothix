import React from "react";

import "./CollectionPreview.scss";
import CollectionPreviewItem from "./CollectionPreviewItem/CollectionPreviewItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="CollectionPreview">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionPreviewItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
