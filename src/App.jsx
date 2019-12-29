import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "./store/actions/index";

import Header from "./components/Navigation/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./containers/Shop/Shop";
import AuthPage from "./pages/AuthPage/AuthPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import { GlobalStyles } from "./GlobalStyles";

import { createStructuredSelector } from "reselect";
import { getCurrentUserSelector } from "./store/selectors/userSelector";
import { auth, createUserProfileDocument } from "./shared/utils/firebase-utils";

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
    <div>
      <GlobalStyles />
      <Header />
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
    </div>
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
