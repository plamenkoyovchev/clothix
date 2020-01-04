import React from "react";

import Spinner from "../../components/UI/Spinner/Spinner";

const withSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...wrappedComponentProps }) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...wrappedComponentProps} />
    );
  };

  return spinner;
};

export default withSpinner;
