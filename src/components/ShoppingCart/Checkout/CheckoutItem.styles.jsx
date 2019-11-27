import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const ItemImage = styled.img.attrs(props => ({
  src: props.imageUrl,
  alt: props.name
}))`
  width: 100%;
  height: 100%;
`;

const spanStyles = css`
  width: 23%;
`;

export const ItemName = styled.div`
  ${spanStyles}
`;

export const ItemPrice = styled.div`
  ${spanStyles}
`;

export const ItemQuantity = styled.div`
  ${spanStyles}
  padding-left: 10px;
`;

const arrowStyles = css`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftArrow = styled.span`
  ${arrowStyles}
  padding-right: 5px;
`;

export const RightArrow = styled.span`
  ${arrowStyles}
  padding-left: 5px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
