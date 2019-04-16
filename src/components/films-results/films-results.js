import React from "react";
import {connect} from "react-redux";
import ButtonsGroup from "../buttons-group/buttons-group";
import { setSortBy } from "../../actions";

const FilmsResults = (props) => {
  const group ={
    className: "films-sortby",
    title: "Sort by",
    buttons: [
      {
        name:"release date", 
        result:"release_date"}, 
      {
        name:"rating", 
        result:"vote_average"
      }
    ],
  }

  return(
    <div className = "films-results">
      {
        (props.count)
        ? <React.Fragment>
            <div className="films-count">{props.count + " movies found"}</div>
            <ButtonsGroup group={group} active={props.sortBy} onClick={props.onClick}></ButtonsGroup>
          </React.Fragment>
        : null
      }
    </div>
  );
}

function mapStateToProps(state){
  const {movies, filter} = state;
  return {count: movies.length, sortBy: filter.sortBy};
}

function mapDispatchToProps(dispatch){
  return {
    onClick: (sortBy) => () => dispatch(setSortBy(sortBy)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsResults)