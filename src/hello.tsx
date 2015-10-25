import React = require('react');
import AddText = require('./add-text');

// This is the main component of the app
class Hello extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = { textList: [] };
  }

  save(text) {
    console.log('save text');
    this.setState({ textList: [...this.state.textList, text] });
    // Should save this data into the store instead of state here
  }

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <div>
          This is some text in a component.
        </div>
        <h1 style={{color: 'blue' }}>Everything is AWESOME!</h1>
        <div>
          Texts:
            <ul>
              { this.state.textList.map(txt =>
                <li>{txt}</li> // TODO(kellyc): items should have a key 
                             // (http://facebook.github.io/react/docs/multiple-components.html#dynamic-children)
               )}
            </ul>
        </div>
        <AddText 
            onSave={this.save.bind(this)} />
      </div>
    );
  }
}

export = Hello;