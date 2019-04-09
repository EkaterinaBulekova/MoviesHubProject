import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {
  name: 'netflixroulette',
  searchBy: 'title',
  search: '',
  sortBy: 'release_date',
  selectedMovie: null,
  movies: []
}
const store = createStore(rootReducer, initialState, null, applyMiddleware(thunk));

export default store;