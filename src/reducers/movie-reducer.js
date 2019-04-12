import {SET_MOVIE} from '../actions/types'

export default function movie(state = null, action) {
  switch (action.type) {
    case SET_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
