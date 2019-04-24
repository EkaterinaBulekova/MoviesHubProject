import { createHashHistory} from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export const history = createHashHistory();
const initState = {
  name: 'netflixroulette',
} 

export const store = createStore(rootReducer(history), initState, compose(applyMiddleware(routerMiddleware(history), thunk)))