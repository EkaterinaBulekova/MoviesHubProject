import React from "react";
import ButtonsGroup from "../buttons-group/buttons-group";

export default function FilmsResults({count, sortBy, onClick}) {
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
        (count)
        ? <React.Fragment>
            <div className="films-count">{count + " movies found"}</div>
            <ButtonsGroup group={group} active={sortBy} onClick={onClick}></ButtonsGroup>
          </React.Fragment>
        : null
      }
    </div>
  );
}