import style from "./main.css";
import React from "react";
import {hydrate} from "react-dom";
import createStore from "./store";
import Root from './root'

const {store, history} = createStore();
const root = (
  <Root
    store={store}
    history={history}
  />
);

hydrate( root, document.getElementById("app"));