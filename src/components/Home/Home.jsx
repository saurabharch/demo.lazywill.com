import React from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import theme from "../../styles/theme";
import globals from "../../styles/global";
import Browser from "../Browser/";

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjbgvexpt0hsm0176hz0flrix"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Home = props => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Browser />
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default injectSheet(normalize)(injectSheet(globals)(Home));
