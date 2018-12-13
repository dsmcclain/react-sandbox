import React, { Component } from 'react';
import './AddWidget.css';

class AddWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.addHello = this.addHello.bind(this);
        this.addTracking = this.addTracking.bind(this);
    }

    addHello() {
        this.props.addPeople(this.state.name);
        this.setState({ name: "" });
    }

    addTracking() {
        this.props.addTracking();
    }

    onChange = e => {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div className="add-widget">
                <div className="add-widget-box">
                    Hello Widget <br/>
                <input className='add-new-name'
                       placeholder="Enter name..." 
                       onChange={this.onChange} 
                       value={this.state.name}/>
                <button className='add-widget-button'
                        onClick={this.addHello}>Add</button>
                </div>
                <div className="add-widget-box">
                    Tracking Widget <br/>
                    <button className='add-widget-button'
                            onClick={this.addTracking}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddWidget;