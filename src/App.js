import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Common/Loading/";

const LoadableContainer = Loadable({
  loader: () => import("./components/Container/"),
  loading: Loading
});

class App extends Component {
  render() {
    return <LoadableContainer />;
  }
}

export default App;
