import React, { Component } from "react";

import "./SignUp.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpForm: {
        displayName: {
          type: "text",
          name: "displayName",
          label: "Display Name",
          value: "",
          required: true
        },
        email: {
          type: "email",
          name: "email",
          label: "Email",
          value: "",
          required: true
        },
        password: {
          type: "password",
          name: "password",
          label: "Password",
          value: "",
          required: true
        },
        confirmPassword: {
          type: "password",
          name: "confirmPassword",
          label: "Confirm Password",
          value: "",
          required: true
        }
      }
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = (event, inputId) => {};

  getFromInputs = () => {
    const { signUpForm } = this.state;
    const formConfig = [];
    for (const key in signUpForm) {
      formConfig.push({
        id: key,
        ...signUpForm[key]
      });
    }

    return formConfig.map(({ id, ...otherProps }) => (
      <Input
        key={id}
        {...otherProps}
        changed={event => this.handleInputChange(event, id)}
      />
    ));
  };

  render() {
    const formInputs = this.getFromInputs();
    return (
      <div className="SignIn">
        <h2 className="title">I don't have an account</h2>
        <p className="sub-title">Sign up with email and password</p>
        <form onSubmit={this.handleFormSubmit}>
          {formInputs}
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
