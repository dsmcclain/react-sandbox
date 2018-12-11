import React, { Component } from 'react';

class TrackingWidget extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="TrackingWidget">
				{this.props.terms}
			</div>
			);
	}
}

export default TrackingWidget;