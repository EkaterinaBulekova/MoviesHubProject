import React from "react";
import {Page} from "../page/page";
import {AppFooter} from "../footer/footer.js"
import { ErrorBoundary } from "../error-boundary/error-boundary";

export const App = () => {
  var appName = "netflixroulette";
  return (
    <ErrorBoundary>
      <div className="app">
        <Page name={appName}></Page>
        <AppFooter name={appName}></AppFooter>
      </div>
    </ErrorBoundary>
  );
}