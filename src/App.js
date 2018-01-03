import React, { Component } from "react";
import loadable from "loadable-components";

const AsyncContainer = loadable(() => import("./components/Container/"));

class App extends Component {
  render() {
    return <AsyncContainer />;
  }
}

export default App;
