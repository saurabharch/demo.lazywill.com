import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../Common/Loading/";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import theme from "../../styles/theme";
import globals from "../../styles/global";

const AsyncHome = Loadable({
  loader: () => import("../Home/"),
  loading: Loading
});
const AsyncBrowser = Loadable({
  loader: () => import(/* webpackChunkName: "browser" */ "../Browser/"),
  loading: Loading
});
const AsyncSubscribe = Loadable({
  loader: () => import("../Subscribe/"),
  loading: Loading
});

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjbgvexpt0hsm0176hz0flrix"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Container = props => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/browse" component={AsyncBrowser} />
            <Route path="/subs" component={AsyncSubscribe} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default injectSheet(normalize)(injectSheet(globals)(Container));
