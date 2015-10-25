import React = require('react');
import ReactDOM = require('react-dom');
import ReactRedux = require('react-redux');
import Redux = require('redux');
import App = require('./app');
import Reducers =  require('./reducers');
// import configureStore from './store/configureStore';

var Provider = ReactRedux.Provider;

// The single data store for the app
const store = Redux.createStore(Reducers.rootReducer, {});

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

export = main;