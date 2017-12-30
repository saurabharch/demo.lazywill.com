import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import injectSheet from "react-jss";
import PictureBox from "../PictureBox/";
import TextsBox from "../TextsBox/";

const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: "60px",
    left: 0,
    right: 0,
    overflow: "auto"
  }
});

class VocabBox extends React.Component {
  render() {
    const { classes } = this.props;
    const combo = this.props.comboQuery.Combo;

    return (
      <div className={classes.root}>
        {combo && <PictureBox combo={combo} />}
        {combo && <TextsBox combo={combo} />}
      </div>
    );
  }
}

const COMBO_QUERY = gql`
  query ComboQuery($id: ID!) {
    Combo(id: $id) {
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

export default graphql(COMBO_QUERY, {
  name: "comboQuery",
  options: ({ comboId }) => ({ variables: { id: comboId } })
})(injectSheet(styles)(VocabBox));
