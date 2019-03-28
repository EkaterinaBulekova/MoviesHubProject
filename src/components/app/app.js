import React from "react";
import ReactDOM from "react-dom";
import {Page} from "../page/page";
import {AppFooter} from "../footer/footer.js"
import { ErrorBoundary } from "../error-boundary/error-boundary";

const App = () => {
  if (process.env.NODE_ENV =='development'){
    console.log('App is started');
  }

  var appName = "netflixroulette";
  return (
    <ErrorBoundary>
      <div className="App">
      <Page name={appName}></Page>
      <AppFooter name={appName}></AppFooter>
    </div>
    </ErrorBoundary>

  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("app"));