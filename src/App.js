import React, { Component } from "react";

import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import theme from "./styles/theme";
import globals from "./styles/global";

import VocabScreen from "./components/VocabScreen/";

//import "typeface-open-sans";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <VocabScreen />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default injectSheet(normalize)(injectSheet(globals)(App));
