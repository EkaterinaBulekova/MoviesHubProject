import React from "react";
import ReactDOM from "react-dom";
import {Page} from "../page/page";
import {AppFooter} from "../footer/footer.js"

const App = () => {
  var appName = "netflixroulette"
  return (
    <div className="App">
      <Page name={appName}></Page>
      <AppFooter name={appName}></AppFooter>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("app"));