import React, { Component } from 'react';

class People extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		}
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
}