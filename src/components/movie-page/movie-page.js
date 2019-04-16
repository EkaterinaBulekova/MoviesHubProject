import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import MovieDetail from "../movie-detail/movie-detail";
import Button from "../button/button";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsByGenre from '../films-by-genre/films-by-genre';
import MovieList from "../movie-list/movie-list";
import * as actions from "../../actions";

export class MoviePage extends React.Component{
  componentDidMount(){
    this.props.getMoviesByGenre({search:this.props.movie.genres, searchBy:'genres', sortBy:'release_date'});
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.movie && nextProps.movie.id !== this.props.movie.id){
      this.props.getMoviesByGenre({search:nextProps.movie.genres, searchBy:'genres', sortBy:'release_date'});
      return false;
    }
    return true;
  }

  render(){
    return (
      <div className="page">
        <Header>
          <Button className="search-button" name="SEARCH" onClick={this.props.initMovie}/>
          <MovieDetail/>
          <FilmsByGenre/>
        </Header>
        <ErrorBoundary className="global-error">
          <MovieList/>
        </ErrorBoundary>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {movie} = state;
  return {movie: movie};
}

function mapDispatchToProps(dispatch){
  return {
    getMoviesByGenre: (filter) => dispatch(actions.fetchFilteredMovies(filter)),
    initMovie: () => dispatch(actions.setMovie(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
