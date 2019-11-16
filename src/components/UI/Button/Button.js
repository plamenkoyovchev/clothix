import React from "react";

import "./Button.scss";

const Button = ({ children, clicked, isGoogleAuthBtn, ...otherProps }) => {
  return (
    <button className={`${isGoogleAuthBtn ? 'google-auth' : ''} Button`} {...otherProps} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
