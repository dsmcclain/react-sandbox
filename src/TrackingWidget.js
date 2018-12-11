import React, { Component } from 'react';
import './TrackingWidget.css';

class TrackingWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
            terms: {
            	fever: 0, 
            	congestion: 2,
            	jaundice: 42,
            	vomiting: 12,
            	diarrhea: 1,
            	tired: 12,
			},
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
				<div className="tracking-columns">
					<div className="term-list">{key}</div>
					<div className="occurrence-list">{value.toString()}</div>
				</div>
				);
		});

		return (
			<div className="tracking-widget">
				<input className="tracking-searchbar" placeholder="search terms..." onChange={this.onChange} />
				<br/>
				<button>Add Term</button>
				{termList}
			</div>
		);
	}
}

export default TrackingWidget;