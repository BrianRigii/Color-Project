import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    "&:a":{
        textDecoration:"none"

    },
    "&:hover" :{
        cursor : "pointer"
    }


  },
  title: {


  },
  color :{
      backgroundColor: "grey"

  }
};
class Minipallete extends Component {
  render() {
    return (
      <Link to={`/pallete/${this.props.minipallete.id}`}>
        <div className={this.props.classes.root}>
          <div className={this.props.classes.color}>
              
          </div>
          <div className={this.props.classes.title}>
            <h5>
              {this.props.minipallete.paletteName} -
              <span>{this.props.minipallete.emoji}</span>
            </h5>
          </div>
        </div>
      </Link>
    );
  }
}

export default withStyles(styles)(Minipallete);
