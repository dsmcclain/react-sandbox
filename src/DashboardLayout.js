import React, { Component } from 'react';
import './DashboardLayout.css';
import AddPeople from './AddPeople';

import WidgetFrame from './WidgetFrame';
import HelloWidget from './HelloWidget';

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: ['Jim', 'Beth'],
            editable: false,
        };
        this.addPeople = this.addPeople.bind(this);
        this.removePeople = this.removePeople.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    renderGreetings() {
        return this.state.people.map(name => (
                <WidgetFrame title={name} children = {
                    <HelloWidget 
                    key={name} 
                    name={name}
                    removePeople={this.removePeople}
                    />
                } />
        ));
    }

    addPeople(newName) {
        this.setState({ people: [...this.state.people, newName] });
    }

    removePeople(removeName) {
        const filteredPeople = this.state.people.filter(name => {
            return name !== removeName;
        });
        this.setState({ people:filteredPeople });
    }

    onEdit() {
        this.state.editable ? this.setState({ editable: false }) : this.setState({ editable: true });
    }

    render() {
        return (
            <div className="DashboardLayout container">
                <div className="editButton">
                    <button  onClick={this.onEdit}>Edit</button>
                </div>
                <AddPeople addPeople={this.addPeople} />
                <div className="widget-rows">
                    {this.renderGreetings()}
                </div>
            </div>
        );
    }
}

export default DashboardLayout;