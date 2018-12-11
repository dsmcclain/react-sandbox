import React, { Component } from 'react';

class TrackingWidget extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const termList = Object.entries(this.props.terms).map(([key, value]) => {
			return (
			<div className="term-list">
				{key} : {value.toString()}
			</div>
			);
		});
		return (
			<div className="TrackingWidget">{termList}</div>
		);
	}
}

export default TrackingWidget;