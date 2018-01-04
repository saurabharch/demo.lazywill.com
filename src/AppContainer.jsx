import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import injectSheet from "react-jss";
import normalize from "normalize-jss";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/shared/Loading/";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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

class Container extends React.Component {
  render() {
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
  }
}

const COMBOS_QUERY = gql`
  query CombosQuery {
    allComboes {
      id
      entry {
        text
      }
      meaning {
        definition
        type
        key
      }
      picture {
        arangoKey
        hash
        sourceName
        sourceUrl
        authorName
        authorUrl
        licenceName
        licenceUrl
      }
      spot {
        height
        width
        x
        y
        key
      }
      sentences {
        id
        text
      }
    }
  }
`;

export default graphql(COMBOS_QUERY, { name: "combosQuery" })(
  injectSheet(normalize)(injectSheet(globals)(Container))
);
