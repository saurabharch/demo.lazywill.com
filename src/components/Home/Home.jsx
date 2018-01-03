import React from "react";
import injectSheet from "react-jss";

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

const Home = props => {
  const { classes } = props;

  return <div className={classes.root}>sdfadsfasd</div>;
};

export default injectSheet(styles)(Home);
