import React = require('react');
import Immutable = require('immutable');

function addText(state = [], action) {
  console.log("addText: state=" + state + " action=" + action);
  return [...state, action.value];
}

export = addText;