import React from "react";
import Message from "../message/message";
import { AppHeader } from "../header/header";

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies:[]
    };
  }

  render() {
    const isFilmFound = this.state.movies.length;
    let searchResult;

    if (isFilmFound) {
      searchResult = <Message text={this.state.movies.length + "films found"} />;
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
