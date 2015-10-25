import Redux = require('redux');
import ReactRedux = require('react-redux');
import Hello = require('./hello');
import Actions = require('./actions');

function mapStateToProps(state) {
  return {
    textList: state.textList
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(Actions, dispatch);
}

export = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Hello);