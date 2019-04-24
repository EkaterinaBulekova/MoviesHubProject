import getQueryUrl from '../query-builder/query-builder';

export function getData(filter){
  return fetch(getQueryUrl(filter))
    .then(res => res.json())
}


export function getMovie(id){
  return fetch("https://reactjs-cdp.herokuapp.com/movies/"+id)
    .then(res => res.json())
}