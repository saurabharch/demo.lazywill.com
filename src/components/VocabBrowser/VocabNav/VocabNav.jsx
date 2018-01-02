import React from "react";
import injectSheet from "react-jss";

import NextLink from "./NextLink";
import InfoLink from "./InfoLink";

const styles = theme => ({
  nav: {
    bottom: 0,
    height: "60px",
    left: 0,
    position: "absolute",
    right: 0
  }
});

const VocabNav = props => {
  const { classes, comboIsLoading, onNextClick } = props;

  return (
    <nav className={classes.nav}>
      <InfoLink onClick={() => console.log("info")} />
      <NextLink onClick={onNextClick} comboIsLoading={comboIsLoading} />
    </nav>
  );
};

export default injectSheet(styles)(VocabNav);
