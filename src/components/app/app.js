import React from "react";
import {connect} from "react-redux";
import MoviePage from "../movie-page/movie-page.js";
import SearchPage from "../search-page/search-page.js";
import { Route, Switch, withRouter } from 'react-router';
import NotFound from "../not-found/not-found.js";

const App = (props) => {
    return (
      <>
        <div className="App">
        <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/search/:search" component={SearchPage} />
            <Route path="/film/:id" component={MoviePage} />
            <Route path="*" component={NotFound} />
        </Switch>
      </div>
      </>
    );
}

function mapStateToProps(state){
  const {router} = state;
  return {location: router.location};
}

export default withRouter(connect(mapStateToProps)(App));