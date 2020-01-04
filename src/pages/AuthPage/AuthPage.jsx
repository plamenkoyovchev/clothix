import React from "react";

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { AuthPageContainer } from "./AuthPage.styles";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const AuthPage = () => {
  return (
    <ErrorBoundary>
      <AuthPageContainer>
        <SignIn />
        <SignUp />
      </AuthPageContainer>
    </ErrorBoundary>
  );
};

export default AuthPage;
