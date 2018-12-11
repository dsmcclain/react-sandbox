import React, { Component } from 'react';

class AddTracking extends Component {
	constructor(props) {
		super(props);
		this.state = { newTerm: "" };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addTerm = this.addTerm.bind(this);
	}

	addTerm() {
		this.props.addTracking(this.state.newTerm);
		this.setState({ newTerm: "" });
	}

	handleUpdate(e) {
		this.setState({ newTerm: e.target.value });
	}

	render() {
		return (
			<div className="add-tracking">
				<input className="add-tracking" 
					   placeholder="add term to track..." 
					   onChange={this.handleUpdate}
					   value={this.state.newTerm} />
				&nbsp;												
				<button onClick={this.addTerm}>Add</button>
			</div>
			)
	}
}

export default AddTracking;