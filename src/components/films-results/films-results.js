import React from "react";
import {connect} from "react-redux";
import Button from "../button/button";
import { setSortBy } from "../../actions";
import styles from "./films-results.css";

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
    <div className = {styles.films_results}>
      {
        (props.count)
        ? <React.Fragment>
            <div className={styles.films_count}>{props.count + " movies found"}</div>
            <div className={styles.films_sortby}>
              <div className={styles.films_sortby_title}>{group.title}</div>
                {group.buttons.map((button)=>
                  <Button key={button.result} 
                    className={(button.result===props.sortBy) 
                      ? (styles.films_sortby_button_active) 
                      : (styles.films_sortby_button)} 
                    name={button.name} onClick={props.onClick(button.result)}>
                  </Button>)}
            </div>
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