import React, { Component } from 'react';
import './WidgetFrame.css';
import PropTypes from 'prop-types';

class WidgetFrame extends Component {
    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
    }
    
    onRemove() {
        this.props.onRemove(this.props.title);
    }

    render() {
        return (
            <div className="widget-frame">
                <div className="widget-frame-header">
                    <span className="title">{this.props.title}</span>
                    {this.props.editable && <button className="close" onClick={this.onRemove}>Close</button>}
                </div>
                <div className="widget-frame-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

WidgetFrame.propTypes = {
    title: PropTypes.string,
    children: PropTypes.required,
    editable: PropTypes.bool,
    onRemove: PropTypes.required,
}

export default WidgetFrame;