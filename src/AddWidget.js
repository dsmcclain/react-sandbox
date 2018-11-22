import React, { Component } from 'react';

class AddWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { widgetChoice: ''};

        this.selectWidget = this.selectWidget.bind(this);
        this.addWidget = this.addWidget.bind(this);
    }

    addWidget() {
        this.props.addWidget(this.state.widgetChoice);
    }

    selectWidget(e) {
        this.setState({ widgetChoice: e.target.value});
        this.addWidget();
    }

    render() {
        return (
            this.props.widgetTypes.map(widgetType => (
            <div className="AddWidget">
                    <span>{widgetType}</span>
                    <button className='add-widget-button'
                            value={widgetType} 
                            onClick={this.addWidget}>Add</button>
            </div>
            ))
        );
    }
}

export default AddWidget;