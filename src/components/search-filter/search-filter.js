import React from 'react'
import ButtonsGroup from '../buttons-group/buttons-group';

export default function SearchFilter({searchBy, onClick}) {
  var group = {
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
  return (<ButtonsGroup group={group} active={searchBy} onClick={(value)=>onClick(value)}></ButtonsGroup>)
}