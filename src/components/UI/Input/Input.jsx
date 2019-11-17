import React from "react";

import "./Input.scss";

const Input = ({ type, name, value, required, label, changed }) => {
  return (
    <div className="group">
      <label
        className={`${value.length > 0 ? "shrink" : null} form-input-label`}
      >
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={changed}
      />
    </div>
  );
};

export default Input;
