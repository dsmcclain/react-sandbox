import React, { Component } from 'react';

class TrackingWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
            terms: {fever: 0, congestion: 2},
		}
	}

    onChange = e => {
        this.setState({ search: e.target.value });
    }

	render() {
		const termList = Object.entries(this.state.terms).map(([key, value]) => {

		const {search} = this.state;

        if( search !== "" && key.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }

			return (
			<div className="term-list">
				{key} : {value.toString()}
			</div>
			);
		});

		return (
			<div className="tracking-widget">
				<input className="tracking-searchbar" placeholder="search terms..." onChange={this.onChange} />
				<div className="TrackingWidget">{termList}</div>
			</div>
		);
	}
}

export default TrackingWidget;