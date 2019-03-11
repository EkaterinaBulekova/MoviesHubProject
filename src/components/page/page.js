import React from "react";
import Message from "../message/message";
import { AppHeader } from "../header/header";
import MovieList from "../movie-list/movie-list";
import fakeMovies from "../../fakes"

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies:
      fakeMovies
    };
  }

  render() {
    const isFilmFound = this.state.movies.length;
    let searchResult;

    if (isFilmFound) {
      searchResult = <MovieList movies={this.state.movies} />;
    } else {
      searchResult = <Message text="No films found" />;
    }

    return (
      <div className="page">
        <AppHeader name={this.props.name}></AppHeader>
        {searchResult}
      </div>
    );
  }
}
