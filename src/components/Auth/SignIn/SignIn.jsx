import React, { Component } from "react";

import "./SignIn.scss";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import { signInWithGoogle, auth } from "../../../shared/utils/firebase-utils";

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

  signWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {}
  };

  handleSignInFormSubmit = async event => {
    event.preventDefault();

    const { authForm } = this.state;
    try {
      await auth.signInWithEmailAndPassword(
        authForm.email.value,
        authForm.password.value
      );
    } catch (error) {}
  };

  handleChangeInput = (event, inputId) => {
    const { value } = event.target;

    const formToUpdate = {
      ...this.state.authForm
    };
    const elementToUpdate = {
      ...formToUpdate[inputId]
    };

    elementToUpdate.value = value;
    formToUpdate[inputId] = elementToUpdate;

    this.setState({
      authForm: formToUpdate
    });
  };

  getFormInputs = () => {
    const { authForm } = this.state;
    const formConfig = [];
    for (const key in authForm) {
      formConfig.push({
        id: key,
        ...authForm[key]
      });
    }

    return formConfig.map(({ id, ...otherProps }) => (
      <Input
        key={id}
        {...otherProps}
        changed={event => this.handleChangeInput(event, id)}
      />
    ));
  };

  render() {
    const formInputs = this.getFormInputs();

    return (
      <div className="SignIn">
        <h2 className="title">I already have an account</h2>
        <p className="sub-title">Sign in with your email and password</p>
        <form onSubmit={this.handleSignInFormSubmit}>
          {formInputs}
          <div className="sign-in-buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" isGoogleAuthBtn clicked={this.signWithGoogle}>
              Sign with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
