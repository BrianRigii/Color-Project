import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="/">React Colors</a>
          </div>
          <div className="slider-container">
            <p>Level : {this.props.level}</p>
          
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.slider}
            />
          </div>
          </div>
        
      </nav>
    );
  }
}

export default Navbar;
