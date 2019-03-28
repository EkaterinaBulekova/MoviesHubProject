import React from "react";
import ButtonsGroup from "../buttons-group/buttons-group";

export default function FilmsResults({count, sortBy, onClick}) {
  if(count){
    var group ={
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
    var inner =
    <React.Fragment>
      <div className="films-count">{count + " movies found"}</div>
      <ButtonsGroup group={group} active={sortBy} onClick={(value)=>onClick(value)}></ButtonsGroup>
    </React.Fragment>
  }
  
  return(
      <div className = "films-results">
        {inner}
      </div>
  );
}