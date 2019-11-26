import React, { Component } from "react";

import "./SignUp.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import {
  auth,
  createUserProfileDocument
} from "../../../shared/utils/firebase-utils";

import {
  AuthContainer,
  TitleContainer,
  SubTitleContainer
} from "../Auth.styles";

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

  handleFormSubmit = async event => {
    event.preventDefault();
    const { signUpForm } = this.state;
    if (signUpForm.password.value !== signUpForm.confirmPassword.value) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUpForm.email.value,
        signUpForm.password.value
      );

      const displayName = signUpForm.displayName.value;
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  handleInputChange = (event, inputId) => {
    const formToUpdate = { ...this.state.signUpForm };
    const elementToUpdate = {
      ...formToUpdate[inputId]
    };

    const { value } = event.target;
    elementToUpdate.value = value;
    formToUpdate[inputId] = elementToUpdate;

    this.setState({ signUpForm: formToUpdate });
  };

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
      <AuthContainer>
        <TitleContainer>I don't have an account</TitleContainer>
        <SubTitleContainer>Sign up with email and password</SubTitleContainer>
        <form onSubmit={this.handleFormSubmit}>
          {formInputs}
          <Button type="submit">Sign Up</Button>
        </form>
      </AuthContainer>
    );
  }
}

export default SignUp;
