import React, { Component } from "react";
import "./colorBox.css";

class Colorbox extends Component {
  render() {
    return (
      <div
        className="colorBox"
        style={{ backgroundColor: this.props.color.color }}
      > 
        <div className ="colorBox-text">
        <span>More</span>
        <p>{this.props.color.name}</p>
        </div>
        
      </div>
    );
  }
}

export default Colorbox;
