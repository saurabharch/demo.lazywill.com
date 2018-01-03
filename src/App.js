import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Common/Loading/";

const AsyncContainer = Loadable({
  loader: () => import("./components/Container/"),
  loading: Loading
});

class App extends Component {
  render() {
    return <AsyncContainer />;
  }
}

export default App;
