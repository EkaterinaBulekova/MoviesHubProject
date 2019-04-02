import "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.js";

module.hot.accept();
ReactDOM.render(<App />, document.getElementById("app"));