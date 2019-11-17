import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/clothix/#">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
