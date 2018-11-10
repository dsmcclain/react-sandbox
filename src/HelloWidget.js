import React, { Component } from 'react';
import './HelloWidget.css';

class HelloWidget extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        greeting: 'Hello',
        AbbreviationCount: 0,
      };
      this.abbreviate = this.abbreviate.bind(this);
  }

  abbreviate() {
      const greetState = this.state.greeting;
      if (greetState === 'Hello') {
        this.setState({ greeting: 'Hi' });
        this.setState({ AbbreviationCount: this.state.AbbreviationCount + 1 });
      } else {
        this.setState({ greeting: 'Hello' });
      };
  }

  render() {
    return (
      <div className="HelloWidget">
        {this.state.greeting} {this.props.name}!
        <br />
        This greeting has been abbreviated {this.state.AbbreviationCount} times.
        <br />
        <button className="abbreviate" onClick={this.abbreviate}>Abbreviate</button>
      </div>
    );
  }
}

export default HelloWidget;