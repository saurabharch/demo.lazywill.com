import React from "react";
import injectSheet from "react-jss";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import VocabBox from "./VocabBox/";
import VocabNav from "./VocabNav/";

const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto"
  }
});

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unseenCombosIds: null,
      seenCombosIds: null,
      activeComboId: null,
      comboIsLoading: false
    };

    this.changeActiveCombo = this.changeActiveCombo.bind(this);
    this.toggleComboIsLoading = this.toggleComboIsLoading.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.combosQuery.allComboes.length &&
      this.props.combosQuery.allComboes !== prevProps.combosQuery.allComboes
    ) {
      this.setState((prevState, props) => {
        const combosIds = props.combosQuery.allComboes.map(obj => obj.id);
        const randomComboId = this.getRandomComboId(combosIds);
        const seenCombosIds = combosIds.splice(
          combosIds.indexOf(randomComboId),
          1
        );

        return {
          unseenCombosIds: combosIds,
          seenCombosIds: seenCombosIds,
          activeComboId: randomComboId,
          comboIsLoading: true
        };
      });
    }
  }

  getRandomComboId(combosIds) {
    return combosIds[Math.floor(Math.random() * combosIds.length)];
  }

  changeActiveCombo() {
    this.setState(prevState => {
      const randomComboId = this.getRandomComboId(prevState.unseenCombosIds);
      const unseenCombosIds = [...prevState.unseenCombosIds];
      unseenCombosIds.splice(unseenCombosIds.indexOf(randomComboId), 1);

      return {
        unseenCombosIds: unseenCombosIds,
        seenCombosIds: [...prevState.seenCombosIds, randomComboId],
        activeComboId: randomComboId,
        comboIsLoading: true
      };
    });
  }

  toggleComboIsLoading() {
    this.setState(prevState => ({
      comboIsLoading: !prevState.comboIsLoading
    }));
  }

  render() {
    const { classes } = this.props;

    if (this.props.combosQuery && this.props.combosQuery.loading) {
      return <div>Loading</div>;
    }
    if (this.props.combosQuery && this.props.combosQuery.error) {
      return <div>Error</div>;
    }

    return (
      <div className={classes.root}>
        {this.state.activeComboId && (
          <React.Fragment>
            <VocabBox
              comboId={this.state.activeComboId}
              toggleIsLoading={this.toggleComboIsLoading}
              isLoading={this.state.comboIsLoading}
            />
            <VocabNav
              onNextClick={this.changeActiveCombo}
              comboIsLoading={this.state.comboIsLoading}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const COMBOS_QUERY = gql`
  query CombosQuery {
    allComboes {
      id
    }
  }
`;

export default graphql(COMBOS_QUERY, { name: "combosQuery" })(
  injectSheet(styles)(Browser)
);
