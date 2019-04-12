import React from 'react'
import {connect} from "react-redux";
import ButtonsGroup from '../buttons-group/buttons-group';
import { setSearchBy } from '../../actions/insdex';

const SearchFilter = (props) => {
  const group = {
    className: "search-filter",
    title: "SEARCH BY",
    buttons: [
      {
        name:"TITLE", 
        result:"title"}, 
      {
        name:"GENRE", 
        result:"genres"
      }
    ],
  };
  return (<ButtonsGroup group={group} active={props.searchBy} onClick={props.onClick}></ButtonsGroup>)
}

function mapStateToProps(state){
  const {filter} = state;
  return {searchBy: filter.searchBy};
}

function mapDispatchToProps(dispatch){
  return {
    onClick: (searchBy) => () => dispatch(setSearchBy(searchBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)