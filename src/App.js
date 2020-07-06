import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import { Route, Link, Switch } from "react-router-dom";
import PalleteList from "./PalleteList";


class App extends Component {
  constructor(props) {
    super(props);

    this.findId = this.findId.bind(this);
  }
  findId(id) {
    return seedColors.find((pallete) => {
      return pallete.id === id;
    });
  }
  render() {
    return (
      <div className="App">
        <div className="Navigation">
          <Switch>
            <Route
              exact
              path="/"
              component={(rout) => <PalleteList kill={rout} />}
            ></Route>
            <Route
              exact
              path="/pallete/:id"
              render={(routProps) => (
                <Pallete
                  pallete={generatePalette(
                    this.findId(routProps.match.params.id)
                  )}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
