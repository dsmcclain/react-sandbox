import React, { Component } from 'react';

class People extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.setState({
			filtered: this.props.items
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			filtered: nextProps.items
		});
	}

	handleChange(e) {
		let currentList = [];
		let newList = []

		if (e.target.value !== "") {
			currentList = this.props.items;

			newList = currentList.filter(item => {
				const lc = item.toLowerCase();
				const filter = e.target.value.toLowerCase();
				return lc.includes(filter);
			});
		} else {
			newList = this.props.items;
		}

		this.setState({
			filtered: newList
		});
	}

// still need to add widget rendering from DL.js to here
	render() {
		return (
			<div className="search-bar">
                <input type="text" 
                	className="input"
                	onChange={this.handleChange} 
                	placeholder="Search..." />
            </div>
        );
	}
}

export default People;