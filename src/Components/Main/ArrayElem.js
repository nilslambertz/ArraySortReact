import React from 'react';
import "./ArrayElem.css";

class ArrayElem extends React.Component {
    render() {
        let className = "arrayElem";
        if(this.props.sorted) {
            className += " sorted";
        } else {
            if(this.props.special) className += " " + this.props.special;
        }
        return (
            <div className={className} style={this.props.style}/>
        )
    }
}

export default ArrayElem;