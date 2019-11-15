import React from "react";

import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/Navigation/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./containers/Shop/Shop";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
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

export default App;
