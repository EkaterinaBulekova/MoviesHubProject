import {SET_MOVIES_BY_FILTER} from "./types";
import getData from "../utils/data-provider/data-provider";

export function fetchFilteredMovies(filter) {
  return function(dispatch) {
    return getData(filter).then(({ result }) => {
      dispatch(setMovies(result.data));
    });
  };
}

function setMovies(data) {
  return {
    type: SET_MOVIES_BY_FILTER,
    payload: data
  };
}