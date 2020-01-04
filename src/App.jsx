import React, { Fragment, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "./store/actions/index";

import { GlobalStyles } from "./GlobalStyles";

import { createStructuredSelector } from "reselect";
import { getCurrentUserSelector } from "./store/selectors/userSelector";
import { auth, createUserProfileDocument } from "./shared/utils/firebase-utils";

import Header from "./components/Navigation/Header/Header";
import Spinner from "./components/UI/Spinner/Spinner";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const Shop = React.lazy(() => import("./containers/Shop/Shop"));
const AuthPage = React.lazy(() => import("./pages/AuthPage/AuthPage"));
const CheckoutPage = React.lazy(() =>
  import("./pages/CheckoutPage/CheckoutPage")
);

const App = props => {
  const { setCurrentUser } = props;
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          const currentUser = {
            id: snapshot.id,
            ...snapshot.data()
          };

          setCurrentUser(currentUser);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/auth"
            render={() =>
              props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUserSelector
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(actions.setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
