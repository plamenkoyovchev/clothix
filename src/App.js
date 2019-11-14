import React from 'react';

import {Route, Switch} from 'react-router-dom';

import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import HatsPage from './pages/HomePage/Categories/HatsPage/HatsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;