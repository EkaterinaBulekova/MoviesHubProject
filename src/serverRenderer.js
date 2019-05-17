import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root';
import createStore from './store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>MovieHub</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const {store, history} = createStore();
      const renderRoot = () => (
      <Root
        store={store}
        history={history}
      />
    );
    const preloadedState = store.getState();
    const htmlString = renderToString(renderRoot());
    res.send(renderHTML(htmlString, preloadedState));
  }
}