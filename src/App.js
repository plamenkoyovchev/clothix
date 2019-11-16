import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/Navigation/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./containers/Shop/Shop";
import AuthPage from "./pages/AuthPage/AuthPage";

import { auth, createUserProfileDocument } from './shared/utils/firebase-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
