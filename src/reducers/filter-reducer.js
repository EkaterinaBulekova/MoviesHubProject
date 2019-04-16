import {SET_SEARCH, SET_SEARCH_BY, SET_SORT_BY} from '../actions/types'

const initialState = {
  searchBy: 'title',
  search: '',
  sortBy: 'release_date'
}
export default function filter(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_BY:
        return {...state, searchBy: action.payload };
      case SET_SEARCH:
        return {...state, search: action.payload };
      case SET_SORT_BY:
        return {...state, sortBy: action.payload };
      default:
        return state;
    }
  }