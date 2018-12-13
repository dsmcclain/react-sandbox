import React, { Component } from 'react';
import './AddWidget.css';

class AddWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.addHello = this.addHello.bind(this);
    }

    addHello() {
        this.props.addPeople(this.state.name);
        this.setState({ name: "" });
    }

    onChange = e => {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div className="add-widget">
                    <div>Hello Widget</div>
                    <input className='add-new-name'
                           placeholder="Enter name..." 
                           onChange={this.onChange} 
                           value={this.state.name}/>
                    <button className='add-widget-button'
                            onClick={this.addHello}>Add</button>
            </div>
        );
    }
}

export default AddWidget;