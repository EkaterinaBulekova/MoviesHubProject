import React from 'react'
import {connect} from "react-redux";
import Button from '../button/button';
import { setSearchBy } from '../../actions';
import styles from './search-filter.css';

const SearchFilter = (props) => {
  const group = {
    className: styles.search_filter,
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
  //return (<ButtonsGroup group={group} active={props.searchBy} onClick={props.onClick}></ButtonsGroup>)
  return(
    <div className={styles.search_filter}>
      <div className={styles.search_filter_title}>{group.title}</div>
        {group.buttons.map((button)=>
          <Button key={button.result} 
            className={(button.result===props.searchBy) 
              ? (styles.search_filter_button_active) 
              : (styles.search_filter_button)} 
            name={button.name} 
            onClick={props.onClick(button.result)}>
          </Button>)}
    </div>
  );
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