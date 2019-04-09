import {combineRedusers} from 'redux';

import movies from './movies-reducer';
import filter from './filter-reducer';

export default combineRedusers(
    movies,
    filter,
)