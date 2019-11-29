import styled, { css } from "styled-components";

const subColor = "gray";
const mainColor = "black";

export const InputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  color: ${mainColor};

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const shrinkLabel = css`
  top: -14px;
  font-size: 14px;
  color: ${mainColor};
`;

export const InputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel}
  }
`;

export const InputEl = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value,
  required: props.required
}))`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel}
  }
`;
