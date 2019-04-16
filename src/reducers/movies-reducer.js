import {SET_MOVIES_BY_FILTER} from '../actions/types'

export default function movies(state = [], action) {
    switch (action.type) {
      case SET_MOVIES_BY_FILTER:
        return action.payload;
      default:
        return state;
    }
  }