import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDirectoryItemsSelector } from "../../store/selectors/directorySelector";

import { DirectoryMenuContainer } from "./Directory.styles";
import MenuItem from "../../components/MenuItem/MenuItem";

const Directory = ({ items }) => {
  return (
    <DirectoryMenuContainer>
      {items.map(({ id, ...otherItemsProps }) => (
        <MenuItem key={id} {...otherItemsProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  items: getDirectoryItemsSelector
});

export default connect(mapStateToProps)(Directory);
