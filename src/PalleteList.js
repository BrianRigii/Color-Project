import React, { Component } from 'react'
import seedColors from "./seedColors";
import {Link} from "react-router-dom"
 class PalleteList extends Component {
    render() {
       var links = seedColors.map(pallete =>(
            <Link to ={`pallete/${pallete.id}`} >{pallete.id}</Link>
        ))
        return (
            <div className= {PalleteList}>
                {links}
            </div>
        )
    }
}

export default PalleteList
