import React, {
  Component
} from "react";

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

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChangeInput = (event, inputId) => {
    const {
      value
    } = event.target;

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
    const {
      authForm
    } = this.state;
    const formConfig = [];
    for (const key in authForm) {
      formConfig.push({
        id: key,
        ...authForm[key]
      });
    }

    return formConfig.map(({
      id,
      ...otherProps
    }) => ( <
      Input key = {
        id
      } {
        ...otherProps
      }
      changed = {
        event => this.handleChangeInput(event, id)
      }
      />
    ));
  };

  render() {
    const formInputs = this.getFormInputs();

    return ( <
      div className = "SignIn" >
      <
      h3 > Sign In
      if you already have an account < /h3> <
      form onSubmit = {
        this.handleFormSubmit
      } > {
        formInputs
      } <
      button type = "submit" > Sign In < /button> <
      /form> <
      /div>
    );
  }
}

export default SignIn;