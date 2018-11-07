import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        greeting: 'Hello',
        fredCount: 0,
      };
      this.fredify = this.fredify.bind(this);
      this.removePeople = this.removePeople.bind(this);
  }

  fredify() {
      const fredness = this.state.greeting;
      if (fredness === 'Hello') {
        this.setState({ greeting: 'Yaba Daba Doo' });
        this.setState({ fredCount: this.state.fredCount + 1 });
      } else {
        this.setState({ greeting: 'Hello' });
      };
  }

  removePeople() {
      this.props.removePeople(this.props.name);
  }
  
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        You have been Fredified {this.state.fredCount} times.
        <br />
        <button className="fredify" onClick={this.fredify}>Fredify!</button>
        <button className="remove" onClick={this.removePeople}>Remove Me!</button>
      </div>
    );
  }
}

export default HelloWorld;