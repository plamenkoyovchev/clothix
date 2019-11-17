import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import "./App.scss";

import Header from "./components/Navigation/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./containers/Shop/Shop";
import AuthPage from "./pages/AuthPage/AuthPage";

import { auth, createUserProfileDocument } from './shared/utils/firebase-utils';

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
        })
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user))
  }
};

export default connect(null, mapDispatchToProps)(App);
