import React from "react";
import {connect} from "react-redux";
import Button from "../button/button";
import CustomInput from "../custom-input/custom-input";
import { setSearch } from "../../actions";
import SearchFilter from "../search-filter/search-filter";


class Search extends React.PureComponent {
  onSubmit =(e) => {
    e.preventDefault();
    this.props.setSearch(e.target[0].value);
  }

  render() {
    return (
      <form  className="search-component" onSubmit={this.onSubmit}>
        <CustomInput className="search-field" title="FIND YOUR MOVIE" value={this.props.search}/>
        <SearchFilter/>
        <Button className="search-button active" type="submit" name="SEARCH"/>
      </form>
    )
  }
}

function mapStateToProps(state){
  const {filter} = state;
  return {search: filter.search};
}

function mapDispatchToProps(dispatch){
  return {
    setSearch: (search) => dispatch(setSearch(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)