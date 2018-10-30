import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
      super(props);
      this.state = { greeting: 'Hello' };
      this.fredify = this.fredify.bind(this);
      this.removePeople = this.removePeople.bind(this);
  }

  fredify() {
      this.setState({ greeting: 'Yaba Daba Doo' });
  }

  removePeople() {
      this.props.removePeople(this.props.name);
  }
  
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.fredify}>Fredify!</button>
        <button onClick={this.removePeople}>Remove Me!</button>
      </div>
    );
  }
}

export default HelloWorld;