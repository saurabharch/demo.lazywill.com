import React from "react";
import injectSheet from "react-jss";
import Loadable from "react-loadable";
import Loading from "../shared/Loading/";

const styles = theme => ({
  root: {
    bottom: 0,
    color: "#fff",
    left: 0,
    overflow: "auto",
    position: "absolute",
    right: 0,
    top: 0
  },
  textBox: {
    padding: "3em",
    maxWidth: "30em",
    "& p": {
      lineHeight: "1.4em",
      fontSize: "1.1em"
    },
    "& b": {
      fontWeight: 700
    }
  },
  head: {
    fontWeight: 300
  }
});

const Home = props => {
  const AsyncBrowser = Loadable({
    loader: () => import("../Browser/"),
    loading: Loading
  });

  const { classes } = props;

  AsyncBrowser.preload();

  return (
    <div className={classes.root}>
      <div className={classes.textBox}>
        <h1 className={classes.head}>Hi, I'm Will </h1>
        <p>
          and I'm working at a new vocabulary training app for language learners
          like myself, for declared <b>visual learners</b>.
        </p>
        <p>
          Please, take a look at this small <b>demo</b> and share with me what
          you think.
        </p>
        <p>
          This is only a sneak preview of what the app will look and work, but
          it shows the main idea.
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Home);
