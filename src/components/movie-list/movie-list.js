import React from 'react';
import Movie from '../movie/movie';

export default function MovieList(props){
    let movies = props.movies
    let movieElements = movies.map((curmovie) =>
      <li key = {curmovie.id} className="movie-list-element" onClick = {() => props.onClick(curmovie)}>
        <Movie movie = {curmovie} />
      </li>
    )
    return (
      <ul className="movie-list-container">
        {movieElements}
      </ul>
    )
}