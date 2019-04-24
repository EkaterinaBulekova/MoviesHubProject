import * as types from "./types";
import {getData, getMovie} from "../utils/data-provider/data-provider";

export function fetchMovieById(id) {
  return function(dispatch) {
    return getMovie(id).then((data) => {
      dispatch(setMovie(data));
    });
  };
}

export function fetchFilteredMovies(filter) {
  return function(dispatch) {
    return getData(filter).then(({ data }) => {
      dispatch(setMovies(data));
    });
  };
}

export function initState(){
  return function(dispatch) {
    dispatch(setMovie(null));
    dispatch(setMovies([]));
  }
}

export function setMovies(data) {
  return {
    type: types.SET_MOVIES_BY_FILTER,
    payload: data
  };
}

export function setMovie(data) {
  return {
    type: types.SET_MOVIE,
    payload: data
  };
}

export function setSearch(search){
  return{
    type: types.SET_SEARCH,
    payload: search
  }
}

export function setSearchBy(searchBy){
  return{
    type: types.SET_SEARCH_BY,
    payload: searchBy
  }
}

export function setSortBy(sortBy){
  return{
    type: types.SET_SORT_BY,
    payload: sortBy
  }
}