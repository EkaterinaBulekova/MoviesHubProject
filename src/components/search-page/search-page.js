import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import Search from "../search/search";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsResults from '../films-results/films-results';
import MovieList from "../movie-list/movie-list";
import Message from "../message/message";
import { fetchFilteredMovies, setMovies } from '../../actions/insdex';

export class SearchPage extends React.Component{

  componentDidMount(){
    this.props.filter.search !== '' && this.props.startSearch(this.props.filter);
  }

  shouldComponentUpdate(nextProps){
    const {search, searchBy, sortBy} = this.props.filter;
    if(nextProps.filter.search !== search ||nextProps.filter.searchBy !== searchBy ||nextProps.filter.sortBy !== sortBy){
      nextProps.filter.search !== ''
        ? this.props.startSearch(nextProps.filter)
        : this.props.initMovies();
      return !search && nextProps.filter.search || search && !nextProps.filter.search;
    }
    return true;
  }

  render(){
    const {filter, hasMovies} = this.props;
    return (
      <div className="page">
        <Header>
          <Search />
        </Header>
        <ErrorBoundary className="global-error">
          <FilmsResults/>
          {hasMovies
            ? <MovieList/>
            : filter.search && <Message text="No films found"/>}
        </ErrorBoundary>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {filter, movies} = state;
  return {filter: filter, hasMovies: movies.length};
}

function mapDispatchToProps(dispatch){
  return {
    startSearch: (filter) => dispatch(fetchFilteredMovies(filter)),
    initMovies: () => dispatch(setMovies([]))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)