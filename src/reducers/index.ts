import Redux = require('redux');
import addText = require('./add-text');

export const rootReducer = Redux.combineReducers({
  addText
});


