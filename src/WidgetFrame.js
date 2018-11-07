import React from 'react';
import './WidgetFrame.css';

const WidgetFrame = ({ title, children }) => {
    return (
        <div className="widget-frame">
            <div className="widget-frame-header">
                <span className="title">{title}</span>
            </div>
            <div className="widget-frame-content">
                {children}
            </div>
        </div>
    );
};

export default WidgetFrame;