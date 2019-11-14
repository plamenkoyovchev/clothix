import React from 'react';

import {Route, Switch} from 'react-router-dom';

import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import Shop from './containers/Shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;