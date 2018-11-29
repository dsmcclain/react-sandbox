import React, { Component } from 'react';
import './DashboardLayout.css';
import AddPeople from './AddPeople';
import AddWidget from './AddWidget';

import WidgetFrame from './WidgetFrame';
import HelloWidget from './HelloWidget';

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: ['Jim', 'Beth'],
            widgetTypes: ['Hello Widget', 'Fake Widget'],
            editable: false,
        };
        this.addPeople = this.addPeople.bind(this);
        this.addWidget = this.addWidget.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    renderGreetings() {
        return this.state.people.map(name => (
                <WidgetFrame 
                    editable={this.state.editable} 
                    title={name} 
                    onRemove={this.onRemove}
                    children = {
                        <HelloWidget 
                        key={name} 
                        name={name}
                        />
                } />
        ));
    }

    addPeople(newName) {
        this.setState({ people: [...this.state.people, newName] });
    }

    addWidget(newName) {
        this.setState({ people: [...this.state.people, newName] });
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
                <AddPeople addPeople={this.addPeople} />
                <div className="searchBar">
                    <input type="text" className="input" placeholder="Search..." />
                    <ul>
                    </ul>
                </div>
                {this.state.editable && <AddWidget
                                         widgetTypes = {this.state.widgetTypes} 
                                         addWidget={this.addWidget} 
                                         />}
                <div className="widget-rows">
                    {this.renderGreetings()}
                </div>
            </div>
        );
    }
}

export default DashboardLayout;