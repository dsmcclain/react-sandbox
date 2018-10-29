import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
      super(props);
      this.state = { greeting: 'Hello' };
      this.fredify = this.fredify.bind(this);
  }

  fredify() {
      this.setState({ greeting: 'Yaba Daba Doo' });
  }
  
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.fredify}>Fredify!</button>
      </div>
    );
  }
}

export default HelloWorld;