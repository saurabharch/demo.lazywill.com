import React from "react";
import injectSheet from "react-jss";
import ArrowForward from "material-ui-icons/ArrowForward";
import InfoOutline from "material-ui-icons/InfoOutline";

import BlockButton from "../BlockButton";

const styles = theme => ({
  nav: {
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    height: "60px",
    position: "fixed",
    width: "100%"
  }
});

const VocabNav = ({ classes, ...props }) => {
  return (
    <nav className={classes.nav}>
      <BlockButton look="squareDark">
        <InfoOutline />
      </BlockButton>
      <BlockButton look="fullGreen">
        next
        <ArrowForward />
      </BlockButton>
    </nav>
  );
};

export default injectSheet(styles)(VocabNav);
