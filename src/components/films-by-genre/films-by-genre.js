import React from "react";
import {connect} from "react-redux";
import styles from "./film-by-genre.css";


const FilmsByGenre = (props) => {
  return(
      <div className = {styles.films_by_genre}>
        <div className = {styles.films_by_genre_text }>
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