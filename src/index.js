import style from "./main.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app/app";


if (module.hot)
    module.hot.accept();
ReactDOM.render(<App name="netflixroulette"/>, document.getElementById("app"));