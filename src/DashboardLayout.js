import React, { Component } from 'react';
import './DashboardLayout.css';
import AddPeople from './AddPeople';
import AddWidget from './AddWidget';

import WidgetFrame from './WidgetFrame';
import HelloWidget from './HelloWidget';
import TrackingWidget from './TrackingWidget';

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: ['Jim', 'Beth'],
            trackingTitle: ['Tracking Widget', 'fake'],
            editable: false,
            search: "",
        };
        this.addPeople = this.addPeople.bind(this);
        this.addTracking = this.addTracking.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    renderGreetings = (name) => {
        const {search} = this.state;

        if( search !== "" && name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }

        return (
            <WidgetFrame 
                editable={this.state.editable} 
                title={name} 
                onRemove={this.onRemove}
                children = {
                    <HelloWidget 
                    key={name} 
                    name={name}
                    />
                } 
            />
        );
    }

    renderTracking = (title) => {
        return (
            <WidgetFrame
                editable={this.state.editable}
                title={title}
                onRemove={this.onRemove}
                children = { <TrackingWidget/> }
            />
        );
    }

    onChange = e => {
        this.setState({ search: e.target.value });
    }

    addPeople(newName) {
        this.setState({ people: [...this.state.people, newName] });
    }

    addTracking(newTitle) {
        this.setState({ trackingTitle: [...this.state.trackingTitle, newTitle] });
    }

    onRemove(removeName) {
        const filteredPeople = this.state.people.filter(name => {
            return name !== removeName;
        });
        this.setState({ people:filteredPeople });
    }

    onEdit() {
        this.setState({
            editable: !this.state.editable,
        });
    }

    render() {
        return (
            <div className="DashboardLayout container">
                <div className="editButton">
                    <button  onClick={this.onEdit}>Edit</button>
                </div>
                <input placeholder="search..." onChange={this.onChange} />
                {this.state.editable && <AddWidget
                                         addPeople={this.addPeople} 
                                         addTracking={this.addTracking}
                                         />}
                <div className="widget-rows">
                    {
                        this.state.people.map(name => {
                            return this.renderGreetings(name)
                        })
                    }
                    {
                        this.state.trackingTitle.map(title => {
                            return this.renderTracking(title)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DashboardLayout;