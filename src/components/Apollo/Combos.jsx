import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Combos extends React.Component {
  render() {
    return null;
  }
}

const COMBOS_QUERY = gql`
  query CombosQuery {
    allComboes {
      id
    }
  }
`;

export default graphql(COMBOS_QUERY, { name: "combosQuery" })(Combos);
