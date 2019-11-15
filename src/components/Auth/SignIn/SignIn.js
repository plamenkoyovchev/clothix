import React, { Component } from "react";

import "./SignIn.scss";

import Input from "../../UI/Input/Input";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authForm: {
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
        }
      }
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChangeInput = event => {
    const { name, value } = event.target;

    //TODO: set new form state without mutating the old form

    this.setState({ [name]: value });
  };

  getFormInputs = () => {
    const { authForm } = this.state;
    const formConfig = [];
    for (const key in authForm) {
      formConfig.push({ id: key, ...authForm[key] });
    }

    return formConfig.map(({ id, ...otherProps }) => (
      <Input key={id} {...otherProps} changed={this.handleChangeInput} />
    ));
  };

  render() {
    const formInputs = this.getFormInputs();

    return (
      <div className="SignIn">
        <h3>Sign In if you already have an account</h3>
        <form onSubmit={this.handleFormSubmit}>
          {formInputs}
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
