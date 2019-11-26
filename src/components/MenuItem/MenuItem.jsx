import React from "react";

import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemImage,
  MenuItemContent,
  MenuItemTitle,
  MenuItemSubTitle
} from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  const navigateToPage = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <MenuItemContainer size={size} onClick={navigateToPage}>
      <MenuItemImage imageUrl={imageUrl} />
      <MenuItemContent>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
