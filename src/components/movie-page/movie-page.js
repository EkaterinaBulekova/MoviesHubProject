import React from "react";
import { Header } from "../header/header";
import MovieDetail from "../movie-detail/movie-detail";
import Button from "../button/button";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsByGenre from '../films-by-genre/films-by-genre';
import MovieList from "../movie-list/movie-list";

export class MoviePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
      movies: []
    };
  }

  componentDidMount(){
    this.getMoviesByGenre(this.props.movie);
  }

  getMoviesByGenre(movie){
    return this.props.getData({search:movie.genres, searchBy:'genres', sortBy:'release_date'})
      .then(result => this.setState({movie: movie, movies: result.data}));
  }

  onMovieClick = (movie) =>()=>{
    (movie.id !== this.state.movie.id) && this.getMoviesByGenre(movie);
  }

  render(){
    const {movie, movies} = this.state;
    return (
      <div className="page">
        <Header name={this.props.name}>
          <Button className="search-button" name="SEARCH" onClick={this.props.onReturn}/>
          <MovieDetail movie={movie}/>
          <FilmsByGenre genres={movie.genres}/>
        </Header>
        <ErrorBoundary className="global-error">
          <MovieList movies={movies.filter(curmovie => curmovie.id !== movie.id)} onClick={this.onMovieClick}/>
        </ErrorBoundary>
      </div>
    );
  }
}

