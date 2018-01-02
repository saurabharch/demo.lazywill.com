import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import theme from "./styles/theme";
import globals from "./styles/global";

import Home from "./components/Home/";
import Info from "./components/Info/";
import Browser from "./components/Browser/";

//import "typeface-open-sans";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default injectSheet(normalize)(injectSheet(globals)(App));
