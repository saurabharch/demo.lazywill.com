import React, { Component } from "react";
//import { Switch, Route } from "react-router-dom";
//import { MuiThemeProvider } from "material-ui/styles";
//import injectSheet from "react-jss";
//import normalize from "normalize-jss";
//import theme from "./styles/theme";
//import globals from "./styles/global";

import asyncComponent from "./components/AsyncComponent";
//import Home from "./components/Home/";
//import Info from "./components/Info/";

//const AsyncBrowse = asyncComponent(() => import("./components/Browser/"));
const AsyncHome = asyncComponent(() => import("./components/Home/"));
//const AsyncInfo = asyncComponent(() => import("./components/Info/"));

//import Browser from "./components/Browser/";

//import "typeface-open-sans";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncHome />
      </div>
    );
  }
}

export default App;
