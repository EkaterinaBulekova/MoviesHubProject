import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import movies from './movies-reducer';
import movie from './movie-reducer';
import filter from './filter-reducer';

const rootReducer = (history) => combineReducers({
  name: ()=>'netflixroulette',
  movies: movies,
  movie: movie,
  filter: filter,
  router: connectRouter(history),
});

export default rootReducer;