import React from "react";
import { Header } from "../header/header";
import MovieDetail from "../movie-detail/movie-detail";
import Button from "../button/button";
import Search from "../search/search";
import { MoviesContainer } from "../movies-container/movies-container";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsByGenre from '../films-by-genre/films-by-genre';
import FilmsResults from '../films-results/films-results';
import getData from '../../utils/data-provider';

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: "title",
      search: "",
      sortBy: "release_date",
      selectedMovie: null,
      count: 0
    };
  }

  componentDidMount(){
    if (process.env.NODE_ENV =='development'){
      console.log('Page is created');
    }
  }

  initState(){
    this.setState({
      searchBy: "title",
      search: "",
      sortBy: "release_date",
      selectedMovie: null,
      count: 0
    })
  }

  handleSearchClick(data){
    if (data.search){
      this.setState({
        searchBy: data.searchBy,
        search: data.search
      });
    } 
    else
      this.initState();
  }

  handleMovieClick(movie){
    this.setState({
      searchBy: "genres",
      search: movie.genres,
      selectedMovie: movie,
    });
  }

  handleSortByClick(sortBy){
    this.setState({
      sortBy: sortBy
    });
  }

  render() {
    let selectedMovie = this.state.selectedMovie;
    let filter = {search: this.state.search, searchBy: this.state.searchBy, sortBy: this.state.sortBy}

    return (
      <div className="page">
        {<ErrorBoundary className="global-error">
          {(selectedMovie)
          ? <Header name={this.props.name}>
              <Button className="search-button" name="SEARCH" onClick={() => this.initState()}/>
              <MovieDetail movie={selectedMovie}/>
              <FilmsByGenre genres={selectedMovie.genres}/>
            </Header>
          : <Header name={this.props.name}>
              <Search onSearchClick={(value) => this.handleSearchClick(value)}/>
              <FilmsResults count={this.state.count} sortBy={this.state.sortBy} onClick={(value)=>this.handleSortByClick(value)}/>
            </Header>}
        </ErrorBoundary>}
        <ErrorBoundary className="global-error">
          <MoviesContainer filter={filter} getData={getData} onClick={(movie) => this.handleMovieClick(movie)} onUpdate={(count)=>this.setState({count: count})}></MoviesContainer>
        </ErrorBoundary>
      </div>
    );
  }
}
