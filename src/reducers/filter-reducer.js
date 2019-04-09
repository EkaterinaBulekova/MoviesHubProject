export default function filter(state, action) {
    switch (action.type) {
      case SET_SEARCH:
        return {...state, search: action.payload };
      case SET_SEARCH_BY:
        return {...state, searchBy: action.payload };
      case SET_SORT_BY:
        return {...state, sortBy: action.payload };
      default:
        return state;
    }
  }