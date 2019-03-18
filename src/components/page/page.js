import React from "react";
import Message from "../message/message";
import {Header} from "../header/header";
import MovieList from "../movie-list/movie-list";
import MovieDetail from "../movie-detail/movie-detail";
import Button from "../button/button"
import Search from "../search/search"

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchBy: "title",
      search: "",
      sortBy: "release_date",
      selectedMovie: null
    };
  }

  initState(){
    this.setState({
      movies: [],
      searchBy: "title",
      search: "",
      sortBy: "release_date",
      selectedMovie: null
    })
  }

  handleSearchClick(data){
    if (data.search){
      this.getData({
        searchBy: data.searchBy,
        search: data.search,
        sortBy: this.state.sortBy,
        selectedMovie: null
      });
    }
  }

  handleMovieClick(movie){
    this.getData({
      searchBy:"genres",
      search: movie.genres,
      sortBy: "release_date",
      selectedMovie: movie
    });
  }

  getQueryUrl(data){
    let resultUrl = "http://react-cdp-api.herokuapp.com/movies?";
    let filter = "filter=";
    if(data.searchBy === 'genres' && Array.isArray(data.search) && data.search.length > 1){
      data.search.map((value, index) => resultUrl += (index) ? ('&' + filter + value) : (filter + value));
    }else{
      let search = "search=" + data.search;
      let searchBy = "searchBy=" + data.searchBy;
      resultUrl += search + '&' + searchBy;
    }
    let sortBy = "sortBy=" + data.sortBy;
    let sortOrder = 'sortOrder=desc';
    resultUrl += '&' + sortBy + '&' + sortOrder;
    return resultUrl;
  }

  getData(newState){
    fetch(this.getQueryUrl(newState))
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result.data, 
            searchBy:newState.searchBy,
            search: newState.search,
            sortBy: newState.sortBy,
            selectedMovie: newState.selectedMovie
          });
        },
        (error) => {this.initState(error);}
      )
  }

  render() {
    let selectedMovie = this.state.selectedMovie;
    let movies = this.state.movies;
    let headerComponent = (selectedMovie)
      ? <React.Fragment>
          <Button className="search-button" name="SEARCH" onClick={() => this.initState()}/>
          <MovieDetail movie={selectedMovie}/>
        </React.Fragment>
      : <Search onSearchClick={(value) => this.handleSearchClick(value)}/>;

    return (
      <div className="page">
        <Header name={this.props.name} innerComponent={headerComponent}/>
        <MovieList 
          movies={movies} 
          excMovie={selectedMovie} 
          onMovieClick={(movie) => this.handleMovieClick(movie)}
        />
        {this.state.movies.length === 0 && this.state.search ? <Message text="No films found"/>:""}
      </div>
    );
  }
}
