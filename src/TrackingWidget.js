import React, { Component } from 'react';
import './TrackingWidget.css';
import AddTracking from './AddTracking.js';

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
		this.addTracking = this.addTracking.bind(this);
	}

    onChange = e => {
        this.setState({ search: e.target.value });
    }

    addTracking(newTerm) {
    	this.setState({ terms: {...this.state.terms, [newTerm]: 0 } });
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
				<AddTracking addTracking={this.addTracking}/>
				{termList}
			</div>
		);
	}
}

export default TrackingWidget;