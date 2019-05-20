import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import AppFooter from "../footer/footer.js"
import MovieDetail from "../movie-detail/movie-detail";
import Button from "../button/button";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsByGenre from '../films-by-genre/films-by-genre';
import MovieList from "../movie-list/movie-list";
import * as actions from "../../actions";
import { push } from 'connected-react-router';
import styles from "./movie-page.css"

export class MoviePage extends React.Component{
  componentDidMount(){
    this.props.getMovie(this.props.id);
  }

  shouldComponentUpdate(nextProps){
    if(this.props.id !== nextProps.id){
      this.props.getMovie(nextProps.id);
      return false;
    }
    if(nextProps.movie && (!this.props.movie || nextProps.movie.id !== this.props.movie.id)){
      this.props.getMoviesByGenre({search:nextProps.movie.genres, searchBy:'genres', sortBy:'release_date'});
      return false;
    }
    return true;
  }

  onSearchClick =()=>{
    this.props.initSearch();
    this.props.returnToSearch();
  }

  render(){
    return (
      <div className="page">
        {
          this.props.movie &&
        <Header>
          <Button className={styles.search_button} name="SEARCH" onClick={this.onSearchClick}/>
          <MovieDetail/>
          <FilmsByGenre/>
        </Header>
        }
        <ErrorBoundary className="global-error">
          <MovieList/>
        </ErrorBoundary>
        <AppFooter/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const {match} = ownProps;
  const {movie, movies} = state;
  return {movie: movie, id: match.params.id, movies: movies};
}

function mapDispatchToProps(dispatch){
  return {
    getMoviesByGenre: (filter) => dispatch(actions.fetchFilteredMovies(filter)),
    getMovie: (id) => dispatch(actions.fetchMovieById(id)),
    initSearch: () => dispatch(actions.setSearch('')),
    returnToSearch: () => dispatch(push('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
