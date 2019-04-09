import style from "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app/app";
import { Provider } from "react-redux";
import store from "./store";


if (module.hot)
    module.hot.accept();
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"));