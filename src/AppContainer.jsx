import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/shared/Loading/";

import theme from "./styles/theme";
import globals from "./styles/global";

const AsyncHome = Loadable({
  loader: () => import("./components/Home/"),
  loading: Loading
});
const AsyncBrowser = Loadable({
  loader: () => import("./components/Browser/"), // /* webpackChunkName: "browser" */
  loading: Loading
});
const AsyncSubscribe = Loadable({
  loader: () => import("./components/Subscribe/"),
  loading: Loading
});
const AsyncNav = Loadable({
  loader: () => import("./components/Nav/"),
  loading: Loading
});

const Container = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/browse" component={AsyncBrowser} />
        <Route path="/subs" component={AsyncSubscribe} />
      </Switch>
      <AsyncNav />
    </MuiThemeProvider>
  );
};

export default injectSheet(normalize)(injectSheet(globals)(Container));
