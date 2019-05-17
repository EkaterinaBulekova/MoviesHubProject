import { createMemoryHistory, createBrowserHistory} from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const initialState = !isServer ? window.__PRELOADED_STATE__ : {name:"netflix", movie:null, movies:[], filter:{search:"", searchBy:"title", sortBy:"release_date", router:connectRouter(history)}};

  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }
  
  const store = createStore(rootReducer(history), initialState, 
                compose(applyMiddleware(routerMiddleware(history), thunk)));
  return ({
    store,
    history
  });
};