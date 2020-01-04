import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { HomePageContainer } from "./HomePage.styles";
import Directory from "../../containers/Directory/Directory";

const HomePage = () => {
  return (
    <ErrorBoundary>
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </ErrorBoundary>
  );
};

export default HomePage;
