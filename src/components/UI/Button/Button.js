import React from "react";

import "./Button.scss";

const Button = ({ children, clicked, ...otherProps }) => {
  return (
    <button className="Button" {...otherProps} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
