import {combineReducers} from 'redux';

import movies from './movies-reducer';
import movie from './movie-reducer';
import filter from './filter-reducer';

const rootReducer = combineReducers({
  name: ()=>'netflixroulette',
  movies: movies,
  movie: movie,
  filter: filter,
});

export default rootReducer;