import React, {PureComponent} from 'react'
import Movie from '../movie/movie'
import { SubHeader } from '../subheader/subheader';

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let excMovie = this.props.excMovie;
    let movies = this.props.movies
    const movieElements = movies.filter(movie=>!(excMovie && excMovie.id === movie.id)).map((curmovie) =>
      <li key = {curmovie.id} className="movie-list-element">
        <Movie movie = {curmovie} onClick = {() => this.props.onMovieClick(curmovie)}/>
      </li>
    )
    return (
      <React.Fragment>
      <SubHeader genres={(excMovie)?excMovie.genres:""} filmCount={(excMovie) ? 0 : movies.length}/>
      <ul className="movie-list-container">
          {movieElements}
      </ul>          
      </React.Fragment>

    )
  }


}