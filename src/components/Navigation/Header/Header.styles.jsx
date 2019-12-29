import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavigationItemsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const NavLinkStyles = css`
  font-size: 20px;
  padding: 10px 15px;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const NavLinkOption = styled(NavLink)`
  ${NavLinkStyles}
`;

export const NavLinkDiv = styled.div`
  ${NavLinkStyles}
`;
