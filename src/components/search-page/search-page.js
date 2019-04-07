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
      searchBy: 'title',
      search: '',
      sortBy: 'release_date',
      movies: []
    };
  }

  performSearch(search, searchBy, sortBy){
    return this.props.getData({search: search, searchBy: searchBy, sortBy: sortBy})
    .then(result => this.setState({search: search, searchBy: searchBy, sortBy: sortBy, movies: result.data}))
  }

  onSearchClick = ({search, searchBy}) =>{
    if(search !== this.state.search || searchBy !== this.state.searchBy)
      (search !=='')
        ? this.performSearch(search, searchBy, this.state.sortBy)
        : this.setState({search: search, movies: []});
  }

  onSortByClick = (sortBy) =>()=>{
    sortBy !== this.props.sortBy 
    && this.performSearch(this.state.search, this.state.searchBy, sortBy);
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
