import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ConnectedRouter } from 'connected-react-router'

const Root = ({store, history}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  );
}

export default hot(module)(Root);

