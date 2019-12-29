import styled from "styled-components";
import Button from "../../../UI/Button/Button";

export const CollectionPreviewItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    button {
      display: flex;
      opacity: 0.85;
    }

    .image {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      button {
        opacity: unset;
      }

      .image {
        opacity: unset;
      }
    }
  }
`;

export const AddToCartButton = styled(Button)`
  width: 80%;
  position: absolute;
  top: 250px;
  opacity: 0.7;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    padding: 0 10px;
    opacity: 0.9;
  }
`;

export const PreviewImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${props => props.imageUrl});
`;

export const CollectionPreviewItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionPreviewItemFooterName = styled.span`
  width: 70%;
  margin-bottom: 15px;
`;
export const CollectionPreviewItemFooterPrice = styled.span`
  width: 30%;
  text-align: right;
`;
