import React, { Component } from "react";
import Pallete from "./Pallete"
import seedColors from "./seedColors"
import {generatePalette} from './ColorHelpers'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Pallete pallete={generatePalette(seedColors[4])} />
    </div>
  );
  }
}

export default App;
