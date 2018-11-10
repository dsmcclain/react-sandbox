import React, { Component } from 'react';

class AddWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { widgetChoice: ''};
        
        this.widgetChoice = this.widgetChoice.bind(this);
        this.addWidget = this.addWidget.bind(this);
    }

    addWidget() {
        this.props.addWidget(this.state.widgetChoice)
    }

    widgetChoice() {
        this.setState({ widgetChoice: 'Hello Widget' });
    }

    render() {
        return (
            <div className="AddWidget">
                <button onClick={this.widgetChoice}>Hello Widget</button>
                <button className="add-widget-button" onClick={this.addWidget}>Add</button>
            </div>
        );
    }
}

export default AddWidget;