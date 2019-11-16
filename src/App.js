import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/Navigation/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./containers/Shop/Shop";
import AuthPage from "./pages/AuthPage/AuthPage";

import { auth } from './shared/utils/firebase-utils';

function App() {
  const [currentUser, setCurrentUser] = useState({ displayName: 'ANONYMOUS' });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user));
    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <div>
      <Header username={currentUser.displayName} />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
