import React from "react";
import injectSheet from "react-jss";

import VocabBox from "./VocabBox/";

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

const Browser = props => {
  const { classes, combo, onSwipe } = props;

  return (
    <div className={classes.root}>
      {combo && (
        <React.Fragment>
          <VocabBox combo={combo} onSwipe={onSwipe} />
        </React.Fragment>
      )}
    </div>
  );
};

export default injectSheet(styles)(Browser);