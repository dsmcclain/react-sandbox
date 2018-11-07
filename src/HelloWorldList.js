import React, { Component } from 'react';
import './HelloWorldList.css';
import AddPeople from './AddPeople';

import WidgetFrame from './WidgetFrame';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { people: ['Jim', 'Sally', 'Bender'] };
        this.addPeople = this.addPeople.bind(this);
        this.removePeople = this.removePeople.bind(this);
    }

    renderGreetings() {
        return this.state.people.map(name => (
            <WidgetFrame title={name} children = {
                <HelloWorld 
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
            <div className="HelloWorldList">
                <AddPeople addPeople={this.addPeople} />
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;