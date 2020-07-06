import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.props.changeFormat(e.target.value);
    this.setState({
      open: true,
    });
  }
  handleClick() {
    this.setState({
      open: false,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="/">React Colors</a>
        </div>
        <div className="slider-container">
          <p>Level : {this.props.level}</p>
          <div className="slider-select">
            <div className="slider">
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onAfterChange={this.props.slider}
              />
            </div>
            <div className="select-container">
              <Select value={this.props.format} onChange={this.handleChange}>
                <MenuItem value="hex">HEX -#ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba - (255,255,255,1)_</MenuItem>
              </Select>
            </div>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              message={<span>Format Changed!</span>}
              autoHideDuration={3000}
              open={this.state.open}
              onClose={this.handleClick}
              action={[
                <IconButton
                  onClick={this.handleClose}
                  color="inherit"
                  key="close"
                  aria-label="close-btn"
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
