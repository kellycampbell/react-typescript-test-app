
import React = require('react');
import ReactDOM = require('react-dom');


function greet(name: string) {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
  );
}

export = greet;

