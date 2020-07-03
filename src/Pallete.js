import React, { Component } from 'react'
import Colorbox from "./Colorbox"
import "./Pallete.css"

class Pallete extends Component {
    render() {
        var colorbox = this.props.colors.map(col =>(
            <Colorbox color = {col}/>
        ))
        return (
           
            <div className = "Pallete">
                <div className="Navbar"></div>
                <div className ="Pallete-colors">
                    {colorbox}
                 </div>
                <div className ="footer"></div>
                
            </div>
        )
    }
}

export default Pallete
