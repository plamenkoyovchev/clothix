import React from "react";

import { ButtonContainer } from "./Button.styles";

const Button = ({
  children,
  clicked,
  inverted,
  isGoogleAuthBtn,
  ...otherProps
}) => {
  return (
    <ButtonContainer
      inverted={inverted}
      isGoogleAuthBtn={isGoogleAuthBtn}
      {...otherProps}
      onClick={clicked}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
