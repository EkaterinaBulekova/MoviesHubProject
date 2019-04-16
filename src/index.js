import style from "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Provider } from "react-redux";
import createPersistStore from "./store";
import { PersistGate } from 'redux-persist/integration/react'


if (module.hot)
    module.hot.accept();

const {store, persistor} = createPersistStore();
ReactDOM.render( 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById("app"));