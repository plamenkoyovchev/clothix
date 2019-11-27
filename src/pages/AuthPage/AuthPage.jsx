import React from "react";

import { AuthPageContainer } from "./AuthPage.styles";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const AuthPage = () => {
  return (
    <AuthPageContainer>
      <SignIn />
      <SignUp />
    </AuthPageContainer>
  );
};

export default AuthPage;
