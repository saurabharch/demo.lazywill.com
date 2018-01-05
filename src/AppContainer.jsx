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

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unseenCombos: null,
      seenCombos: null,
      activeCombo: null,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };

    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.changeActiveCombo = this.changeActiveCombo.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowResizeHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResizeHandler, false);
  }

  windowResizeHandler(e) {
    this.setState(() => ({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }));
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
    const { windowWidth, windowHeight } = this.state;

    // if (this.props.combosQuery && this.props.combosQuery.loading) {
    //   return <div>Loading</div>;
    // }
    // if (this.props.combosQuery && this.props.combosQuery.error) {
    //   return <div>Error</div>;
    // }

    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <AsyncHome history={history} />}
          />
          <Route
            exact
            path="/browse"
            render={() => (
              <AsyncBrowser
                combo={this.state.activeCombo}
                onSwipe={this.changeActiveCombo}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
              />
            )}
          />
          <Route path="/subs" component={AsyncSubscribe} />
        </Switch>
        <AsyncNav
          onNextClick={this.changeActiveCombo}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
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
