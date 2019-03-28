import React from "react";
import Button from "../button/button";
import SearchFilter from "../search-filter/search-filter";
import CustomInput from "../custom-input/custom-input";

class Search extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchBy: "title",
      search: ""
    }
  }

  render() {
    let startSearch = this.props.onSearchClick;
    return (
      <div className="search-component" >
        <CustomInput className="search-field" title="FIND YOUR MOVIE" onChange={value => this.setState({search: value})} onEnter={(isEnter) => isEnter&&startSearch(this.state)}></CustomInput>
        <SearchFilter searchBy={this.state.searchBy} onClick={(value)=> this.setState({searchBy: value})}></SearchFilter>
        <Button className="search-button active" name="SEARCH" onClick={() => startSearch(this.state)}></Button>
      </div>
    )
  }
}

export default Search