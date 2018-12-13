import React, { Component } from 'react';
import './AddWidget.css';

class AddWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
        };

        this.addHello = this.addHello.bind(this);
        this.addTracking = this.addTracking.bind(this);
    }

    addHello() {
        this.props.addPeople(this.state.name);
        this.setState({ name: "" });
    }

    addTracking() {
        this.props.addTracking(this.state.title);
        this.setState({ title: "" });
    }

    newName = e => {
        this.setState({ name: e.target.value });
    }

    newTitle = e => {
        this.setState({ title: e.target.value });
    }

    render() {
        return (
            <div className="add-widget">
                <div className="add-widget-box">
                    Hello Widget <br/>
                <input className='add-new-name'
                       placeholder="Enter name..." 
                       onChange={this.newName} 
                       value={this.state.name}/>
                <button className='add-widget-button'
                        onClick={this.addHello}>Add</button>
                </div>
                <div className="add-widget-box">
                    Tracking Widget <br/>
                    <input className='add-new-title'
                           placeholder="Add tracking title..."
                           onChange={this.newTitle}
                           value={this.state.title}/>
                    <button className='add-widget-button'
                            onClick={this.addTracking}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddWidget;