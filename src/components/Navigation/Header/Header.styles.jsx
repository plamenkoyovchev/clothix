import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavigationItemsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLinkStyles = css`
  font-size: 20px;
  padding: 10px 15px;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }
`;

export const NavLinkOption = styled(NavLink)`
  ${NavLinkStyles}
`;

export const NavLinkDiv = styled.div`
  ${NavLinkStyles}
`;
