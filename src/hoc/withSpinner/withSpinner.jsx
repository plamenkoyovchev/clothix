import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const withSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...wrappedComponentProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...wrappedComponentProps} />
    );
  };

  return spinner;
};

export default withSpinner;
