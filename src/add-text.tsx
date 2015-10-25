import React = require('react');
import ReactDOM = require('react-dom');

class AddText extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    }
    console.log(this.props);
  }

  handleSubmit() {
    console.log("button clicked value = " + this.state.text);
    var val = this.state.text.trim();
    if (val) {
      this.props.onSave(val);
      this.setState({ text: val });
    } else {
      this.props.onDestroy();
    }
  }

  // see https://github.com/rackt/redux/blob/master/examples/todomvc/components/TodoTextInput.js
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.text } onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)} >Add Text</button>
      </div>
    );
  }

}

export = AddText;