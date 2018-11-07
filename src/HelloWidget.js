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
      this.removePeople = this.removePeople.bind(this);
  }

  abbreviate() {
      const fredness = this.state.greeting;
      if (fredness === 'Hello') {
        this.setState({ greeting: 'Hi' });
        this.setState({ AbbreviationCount: this.state.AbbreviationCount + 1 });
      } else {
        this.setState({ greeting: 'Hello' });
      };
  }

  removePeople() {
      this.props.removePeople(this.props.name);
  }
  
  render() {
    return (
      <div className="HelloWidget">
        {this.state.greeting} {this.props.name}!
        <br />
        This greeting has been abbreviated {this.state.AbbreviationCount} times.
        <br />
        <button className="abbreviate" onClick={this.abbreviate}>Abbreviate</button>
        <button className="remove" onClick={this.removePeople}>Remove Me!</button>
      </div>
    );
  }
}

export default HelloWidget;