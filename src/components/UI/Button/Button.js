import React from "react";

import "./Button.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="Button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
