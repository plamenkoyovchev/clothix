import React from "react";
import { InputGroupContainer, InputLabel, InputEl } from "./Input.styles";

const Input = ({ type, name, value, required, label, changed }) => {
  return (
    <InputGroupContainer>
      <InputLabel className={value.length > 0 ? "shrink" : ""}>
        {label}
      </InputLabel>
      <InputEl
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={changed}
      />
    </InputGroupContainer>
  );
};

export default Input;
