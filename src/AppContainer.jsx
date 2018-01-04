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

import Home from "./components/Home/";

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

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unseenCombos: null,
      seenCombos: null,
      activeCombo: null
    };

    this.changeActiveCombo = this.changeActiveCombo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.combosQuery.allComboes !== prevProps.combosQuery.allComboes &&
      this.props.combosQuery.allComboes.length
    ) {
      this.setState((prevState, props) => {
        const allCombos = props.combosQuery.allComboes;
        const randomCombo = this.getRandomCombo(allCombos);
        const randomComboIndex = allCombos.findIndex(
          combo => combo.id === randomCombo.id
        );
        const unseenCombos = [...allCombos];
        const seenCombos = unseenCombos.splice(randomComboIndex, 1);

        return {
          unseenCombos: unseenCombos,
          seenCombos: seenCombos,
          activeCombo: randomCombo
        };
      });
    }
  }

  getRandomCombo(combos) {
    return combos[Math.floor(Math.random() * combos.length)];
  }

  changeActiveCombo() {
    const randomCombo = this.getRandomCombo(this.state.unseenCombos);
    const randomComboIndex = this.state.unseenCombos.findIndex(
      combo => combo.id === randomCombo.id
    );
    const unseenCombos = [...this.state.unseenCombos];
    unseenCombos.splice(randomComboIndex, 1);

    this.setState(prevState => {
      return {
        unseenCombos: unseenCombos,
        seenCombos: [...this.state.seenCombos, randomCombo],
        activeCombo: randomCombo
      };
    });
  }

  render() {
    if (this.props.combosQuery && this.props.combosQuery.loading) {
      return <div>Loading</div>;
    }
    if (this.props.combosQuery && this.props.combosQuery.error) {
      return <div>Error</div>;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route
            exact
            path="/browse"
            render={() => <AsyncBrowser combo={this.state.activeCombo} />}
          />
          <Route path="/subs" component={AsyncSubscribe} />
        </Switch>
        <AsyncNav onNextClick={this.changeActiveCombo} />
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
  injectSheet(normalize)(injectSheet(globals)(AppContainer))
);
