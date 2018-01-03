import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import loadable from "loadable-components";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import theme from "../../styles/theme";
import globals from "../../styles/global";

//import Browser from "../Browser/";
//import Info from "../Info/";

const AsyncBrowser = loadable(() => import("../Browser/"));
const AsyncInfo = loadable(() => import("../Info/"));

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
            <Route exact path="/browser" component={AsyncBrowser} />
            <Route path="/info" component={AsyncInfo} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default injectSheet(normalize)(injectSheet(globals)(Container));
