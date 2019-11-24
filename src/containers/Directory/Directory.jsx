import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDirectoryItemsSelector } from "../../store/selectors/directorySelector";

import "./Directory.scss";
import MenuItem from "../../components/MenuItem/MenuItem";

const Directory = ({ items }) => {
  return (
    <div className="directory-menu">
      {items.map(({ id, ...otherItemsProps }) => (
        <MenuItem key={id} {...otherItemsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: getDirectoryItemsSelector
});

export default connect(mapStateToProps)(Directory);
