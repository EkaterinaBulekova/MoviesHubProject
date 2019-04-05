import React from "react";
import { Header } from "../header/header";
import Search from "../search/search";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsResults from '../films-results/films-results';
import MovieList from "../movie-list/movie-list";
import Message from "../message/message";

export class SearchPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchBy: 'title',
      search: '',
      sortBy: 'release_date',
      movies: []
    };
  }

  getFilter(state){
    return {
      searchBy: state.searchBy,
      search: state.search,
      sortBy: state.sortBy,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.loading){
      nextState.search 
        ? this.props.getData(this.getFilter(nextState))
          .then(result => this.setState({movies: result.data, loading: false}))
        : this.setState({movies: [], loading: false})
      return false;
    }
    return true;
  }

  onSearchClick = (filter) =>{
    (filter.search !== this.state.search||filter.searchBy!==this.state.searchBy)
     && this.setState({search: filter.search, searchBy: filter.searchBy, loading: true});
  }

  onSortByClick = (sortBy) =>()=>{
    sortBy !== this.props.sortBy && this.setState({sortBy: sortBy, loading: true});
  }

  render(){
    const {search, sortBy, movies} = this.state;
    return (
      <div className="page">
        <Header name={this.props.name}>
          <Search onSearchClick={this.onSearchClick}/>
        </Header>
        <ErrorBoundary className="global-error">
          <FilmsResults count={movies.length} sortBy={sortBy} onClick={this.onSortByClick}/>
          {movies.length
            ? <MovieList onClick={this.props.onReturn} movies={movies}/>
            : search && <Message text="No films found"/>}
        </ErrorBoundary>
      </div>
    );
  }
}
