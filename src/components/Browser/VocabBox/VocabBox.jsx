import React from "react";
import Hammer from "react-hammerjs";
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

const VocabBox = props => {
  const { classes, combo, onSwipe } = props;

  function handleSwipe() {
    onSwipe();
  }

  return (
    <Hammer onSwipeLeft={handleSwipe}>
      <div className={classes.root}>
        <PictureBox combo={combo} />
        <TextsBox combo={combo} />
      </div>
    </Hammer>
  );
};

export default injectSheet(styles)(VocabBox);
