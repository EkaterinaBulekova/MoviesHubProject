import style from "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Provider } from "react-redux";
import {history, store} from "./store";
//import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'



 if (module.hot)
     module.hot.accept();

//const {store, persistor} = createPersistStore();
ReactDOM.render( 
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
  </Provider>,
  document.getElementById("app"));