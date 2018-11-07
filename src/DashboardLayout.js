import React, { Component } from 'react';
import './DashboardLayout.css';
import AddPeople from './AddPeople';

import WidgetFrame from './WidgetFrame';
import HelloWidget from './HelloWidget';

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { people: ['Jim', 'Beth'] };
        this.addPeople = this.addPeople.bind(this);
        this.removePeople = this.removePeople.bind(this);
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

    render() {
        return (
            <div className="DashboardLayout">
                <AddPeople addPeople={this.addPeople} />
                {this.renderGreetings()}
            </div>
        );
    }
}

export default DashboardLayout;