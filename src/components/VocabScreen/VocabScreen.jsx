import React from "react";
import injectSheet from "react-jss";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import PictureBox from "../PictureBox/";
import TextsBox from "../TextsBox/";
import VocabNav from "../VocabNav/";

const styles = theme => ({
  root: {
    paddingBottom: "80px"
  }
});

class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocabItems: []
    };
  }

  render() {
    const { classes } = this.props;

    if (this.props.comboQuery && this.props.comboQuery.loading) {
      return <div>Loading</div>;
    }
    if (this.props.comboQuery && this.props.comboQuery.error) {
      return <div>Error</div>;
    }
    const comoboToRender = this.props.comboQuery.Combo;

    return (
      <div className={classes.root}>
        <div>
          <PictureBox vocabItem={comoboToRender} />
          <TextsBox vocabItem={comoboToRender} />
          <VocabNav />
        </div>
      </div>
    );
  }
}

//export default injectSheet(styles)(VocabScreen);

const COMBO_QUERY = gql`
  query ComboQuery {
    Combo(id: "cjbnv6eotrl8z01431j3lfnwk") {
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
export default graphql(COMBO_QUERY, { name: "comboQuery" })(
  injectSheet(styles)(VocabScreen)
);
