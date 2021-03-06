import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Route exact path="/" component={Landing} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
