import React from "react";
import Button from "../button/button";
import SearchFilter from "../search-filter/search-filter";
import CustomInput from "../custom-input/custom-input";

export default class Search extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchBy: "title",
    }
  }

  onSearchByClick = (searchBy) => () => {
    this.setState({searchBy: searchBy});
  }

  onSubmit =(e) => {
    e.preventDefault();
    this.props.onSearchClick({search: e.target[0].value, searchBy: this.state.searchBy});
  }

  render() {
    return (
      <form  className="search-component" onSubmit={this.onSubmit}>
        <CustomInput className="search-field" title="FIND YOUR MOVIE"/>
        <SearchFilter searchBy={this.state.searchBy} onClick={this.onSearchByClick}/>
        <Button className="search-button active" type="submit" name="SEARCH"/>
      </form>
    )
  }
}