import React, { Component } from "react";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChangeInput = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="SignIn">
        <h3>Sign In if you already have an account</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleChangeInput}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
