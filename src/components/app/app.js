import React from "react";
import {connect} from "react-redux";
import AppFooter from "../footer/footer.js"
import MoviePage from "../movie-page/movie-page.js";
import SearchPage from "../search-page/search-page.js";

const App = (props) => {
    return (
      <div className="App">
        {props.movie
          ? <MoviePage/>
          : <SearchPage/>}
        <AppFooter/>
      </div>
    );
}

function mapStateToProps(state){
  const {movie} = state;
  return {movie: movie};
}

export default connect(mapStateToProps)(App)