import React, { Component } from "react";
import seedColors from "./seedColors";
import Minipallete from "./Minipallete";
class PalleteList extends Component {
  render() {
    var links = seedColors.map((pallete) => (
      <Minipallete minipallete={pallete}></Minipallete>
    ));
    return <div className="PalleteList">{links}</div>;
  }
}

export default PalleteList;
