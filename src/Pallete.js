import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import "./Pallete.css";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({
      level: newLevel,
    });
  }
  render() {
    var colorbox = this.props.pallete.colors[this.state.level].map((col) => (
      <Colorbox color={col} />
    ));
    return (
      <div className="Pallete">
        <Navbar slider={this.changeLevel} level ={this.state.level}/>
        <div className="Pallete-colors">{colorbox}</div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Pallete;
