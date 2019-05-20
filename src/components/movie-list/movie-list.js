import React from 'react';
import {connect} from "react-redux";
import Movie from '../movie/movie';
import { push } from 'connected-react-router';
import styles from "./movie-list.css";

const MovieList = (props) =>{
  const movieElements = props.movies.map((curmovie) =>
    <li key = {curmovie.id} className={styles.movie_list_element}>
        <Movie movie = {curmovie} onClick = {props.onClick(curmovie)}/>
    </li>)
  return (
    <ul className={styles.movie_list_container}>
      {movieElements}
    </ul>
  )
}

function mapStateToProps(state){
  const {movies, movie} = state;
  return {movies: movie ? movies.filter(m => m.id !== movie.id) :movies};
}

function mapDispatchToProps(dispatch){
  return {
    onClick: (movie) => () => dispatch(push("/film/"+movie.id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)