import React from "react";
import {connect} from "react-redux";

const FilmsByGenre = (props) => {
  return(
      <div className = "films-by-genre">
        <div className = "films-by-genre-text">
          {"Films by " + props.genres + " genre"}
        </div>
      </div>
  );
}

function mapStateToProps(state){
  const {movie} = state;
  return {genres: movie.genres};
}

export default connect(mapStateToProps)(FilmsByGenre)