import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    overflow: "hidden",
    ".picture-mode &": {
      display: "none"
    }
  },
  spot: {
    position: "absolute",
    borderRadius: "4px",
    border: "2px dotted #fff",
    boxShadow: "0 0 0 1000px rgba(0,0,0,.4)",
    transition: "all .3s"
  }
});

const SpotArea = props => {
  const { classes, spot } = props;
  const spotStyle = {
    left: spot.x + "%",
    top: spot.y + "%",
    right: 100 - (spot.x + spot.width) + "%",
    bottom: 100 - (spot.y + spot.height) + "%"
  };

  return (
    <div className={classes.root}>
      <div className={classes.spot} style={spotStyle} />
    </div>
  );
};

export default injectSheet(styles)(SpotArea);
