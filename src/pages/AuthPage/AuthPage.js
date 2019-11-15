import React from "react";

import "./AuthPage.scss";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const AuthPage = () => {
  return (
    <div className="AuthPage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
