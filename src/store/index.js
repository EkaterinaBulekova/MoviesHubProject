import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initState = {
  name: 'netflixroulette'
} 
export default () => {
  let store = createStore(persistedReducer, initState, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}