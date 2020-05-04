import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/shopping-list.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import itemsReducer from './store/reducers/Items';

/**
 * enable redux dev tools
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  items: itemsReducer,
})

/**
 * create store with combined reducers and middleware
 */
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
