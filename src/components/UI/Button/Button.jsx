import React from "react";

import "./Button.scss";

const Button = ({
  children,
  clicked,
  inverted,
  isGoogleAuthBtn,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleAuthBtn ? "google-auth" : ""
      } Button`}
      {...otherProps}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
