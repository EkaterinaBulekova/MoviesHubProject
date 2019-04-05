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

  getFilter(genres){
    return {
      searchBy: "genres",
      search: genres,
      sortBy: "release_date"};
  }

  componentDidMount(){
    this.props.getData(this.getFilter(this.state.movie.genres))
    .then(result => this.setState({movies: result.data}))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.movie.id !== this.state.movie.id){
      this.props.getData(this.getFilter(nextState.movie.genres))
      .then(result => this.setState({movies: result.data}))
      return false;
    }
    return true;
  }

  onMovieClick = (movie) =>()=>{
    this.setState({movie: movie});
  }

  render(){
    const {movie, movies} = this.state;
    console.log('render '+ movie.genres);
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

