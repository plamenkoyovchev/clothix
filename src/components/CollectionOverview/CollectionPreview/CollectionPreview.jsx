import React from "react";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer
} from "./CollectionPreview.styles";
import CollectionPreviewItem from "./CollectionPreviewItem/CollectionPreviewItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle> {title.toUpperCase()} </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionPreviewItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
