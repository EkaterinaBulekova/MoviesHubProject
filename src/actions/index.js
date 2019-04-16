import {SET_MOVIE, SET_MOVIES_BY_FILTER, SET_SEARCH_BY, SET_MOVIE_BY_ID, SET_SEARCH, SET_SORT_BY} from "./types";
import getData from "../utils/data-provider/data-provider";

export function fetchFilteredMovies(filter) {
  return function(dispatch) {
    return getData(filter).then(({ data }) => {
      dispatch(setMovies(data));
    });
  };
}

export function setMovies(data) {
  return {
    type: SET_MOVIES_BY_FILTER,
    payload: data
  };
}

export function setMovie(data) {
  return {
    type: SET_MOVIE,
    payload: data
  };
}

export function setSearch(search){
  return{
    type: SET_SEARCH,
    payload: search
  }
}

export function setSearchBy(searchBy){
  return{
    type: SET_SEARCH_BY,
    payload: searchBy
  }
}

export function setSortBy(sortBy){
  return{
    type: SET_SORT_BY,
    payload: sortBy
  }
}