import React, { Component } from 'react';
import './AddPeople.css';

class AddPeople extends Component {
    constructor(props) {
        super(props);
        this.state = { greetingName: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addPeople = this.addPeople.bind(this);
    }

    addPeople() {
        this.props.addPeople(this.state.greetingName);
        this.setState({ greetingName: '' });
    }

    handleUpdate(e) {
        this.setState({ greetingName: e.target.value });
    }

    render() {
        return (
            <div className="AddPeople">
                <input 
                    type="text" 
                    onChange={this.handleUpdate}
                    value={this.state.greetingName}
                />
                &nbsp;&nbsp;
                <button onClick={this.addPeople}>Add</button>
            </div>
        );
    }
}

export default AddPeople;