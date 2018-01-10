import React from "react";
import injectSheet from "react-jss";
import PictureBox from "../PictureBox/";
import TextsBox from "../TextsBox/";

const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflowY: "auto",
    overflowX: "hidden",
    "&.portrait": {
      bottom: "60px"
    }
  }
});

class VocabBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  getOrientationClass(width, height) {
    return width >= height ? "landscape" : "portrait";
  }

  handleSwipe() {
    this.props.onSwipe();
  }

  render() {
    const { classes, combo, nextCombo, windowWidth, windowHeight } = this.props;

    return (
      <div
        className={`${classes.root} ${this.getOrientationClass(
          windowWidth,
          windowHeight
        )}`}
      >
        <PictureBox
          combo={combo}
          nextCombo={nextCombo}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
        <TextsBox
          combo={combo}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(VocabBox);
