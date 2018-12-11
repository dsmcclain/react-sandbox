import React, { Component } from 'react';

class TrackingWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
            terms: {fever: 0, congestion: 2},
		}
	}

	render() {
		const termList = Object.entries(this.state.terms).map(([key, value]) => {
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