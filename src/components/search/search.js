import React from "react";
import Button from "../button/button";

class Search extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchBy: "title",
      search: ""
    }
  }

  handleKeyPress(event){
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {
    let onSearchClick = this.props.onSearchClick;
    return (
      <div className="search-component" >
        <div className="search-field">
          <div className="search-field-title">FIND YOUR MOVIE</div>
          <input className="search-field-input" onChange={e => this.setState({search: e.target.value})} onKeyUp={(e) => (e.key==='Enter')&&onSearchClick(this.state)}></input>
        </div>
        <div className="search-filter">
          <div className="search-filter-title">SEARCH BY</div>
            <Button className={"search-filter-button " + (this.state.searchBy==="title" && "active")} name="TITLE" onClick={()=> this.setState({searchBy: "title"})}></Button>
            <Button className={"search-filter-button " + (this.state.searchBy==="genres" && "active")} name="GENRE" onClick={() => this.setState({searchBy:"genres"})}></Button>
          </div>
        <Button className="search-button active" name="SEARCH" onClick={() => onSearchClick(this.state)}></Button>
      </div>
    )
  }
}

export default Search