import React from "react";
import ReactDOM from "react-dom";
import {Page} from "./components/page";

function App() {
    return (
      <div className="App">
        <Page name="My page"></Page>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
module.hot.accept();