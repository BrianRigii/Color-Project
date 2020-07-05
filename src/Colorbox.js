import React, { Component } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Colorbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      overLayHidden : false
    }

    this.toggleOverlay = this.toggleOverlay.bind(this)
  }
  toggleOverlay() {
    
    this.setState({overLayHidden: true},()=>{
      setTimeout(()=>this.setState({overLayHidden:false}),1500)
    })
  
  }
  render() {
    return (
      
      <CopyToClipboard text={`${this.props.color.hex}`} onCopy={this.toggleOverlay}>
        <div
          className="colorBox"
          style={{ backgroundColor: this.props.color.hex }}
        >
          <span className ={`over-lay ${this.state.overLayHidden && "show"}`} style={{ backgroundColor: this.props.color.color }}/>
          <span className= {`overlay-msg ${this.state.overLayHidden && "show"}`}>
            <h1>Copied</h1>
            <p>{this.props.color.hex}</p>
          </span>
          <div className="colorBox-text">
            <div className="copy-link">
              <button className="copy-btn">Copy</button>
            </div>
            <p>{this.props.color.name}</p>
            <span className="see-more">More</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}


export default Colorbox;
