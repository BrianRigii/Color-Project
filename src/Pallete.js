import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import "./Pallete.css";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({
      level: newLevel,
    });
  }

  changeFormat(newFormat) {
    this.setState({
      format: newFormat,
    });
  }
  render() {
    var colorbox = this.props.pallete.colors[this.state.level].map((col) => (
      <Colorbox color={col} format={this.state.format} />
    ));
    return (
      <div className="Pallete">
        <Navbar
          slider={this.changeLevel}
          level={this.state.level}
          format={this.state.format}
          changeFormat={this.changeFormat}
        />
        <div className="Pallete-colors">{colorbox}</div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Pallete;
