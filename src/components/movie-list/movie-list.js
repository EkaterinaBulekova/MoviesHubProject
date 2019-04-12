import React from 'react';
import {connect} from "react-redux";
import Movie from '../movie/movie';
import { setMovie } from '../../actions/insdex';

const MovieList = (props) =>{
  const movieElements = props.movies.map((curmovie) =>
    <li key = {curmovie.id} className="movie-list-element">
      <Movie movie = {curmovie} onClick = {props.onClick(curmovie)}/>
    </li>)
  return (
    <ul className="movie-list-container">
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
    onClick: (movie) => () => dispatch(setMovie(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)