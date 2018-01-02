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

class VocabBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.changeActiveCombo = this.changeActiveCombo.bind(this);
    this.state = {
      unseenCombosIds: null,
      seenCombosIds: null,
      activeComboId: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.combosQuery.allComboes.length && this.props !== prevProps) {
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
          activeComboId: randomComboId
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
        activeComboId: randomComboId
      };
    });
  }

  render() {
    const { classes } = this.props;

    // if (this.props.comboQuery && this.props.comboQuery.loading) {
    //   return <div>Loading</div>;
    // }
    // if (this.props.comboQuery && this.props.comboQuery.error) {
    //   return <div>Error</div>;
    // }
    // const comoboToRender = this.props.comboQuery.Combo;

    return (
      <div className={classes.root}>
        {this.state.activeComboId && (
          <React.Fragment>
            <VocabBox comboId={this.state.activeComboId} />
            <VocabNav onNextClick={this.changeActiveCombo} />
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
  injectSheet(styles)(VocabBrowser)
);
