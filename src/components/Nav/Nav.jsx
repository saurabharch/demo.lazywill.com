import React from "react";
import injectSheet from "react-jss";
import { withRouter } from "react-router";

import HomeLink from "./HomeLink";
import NextLink from "./NextLink";

const styles = theme => ({
  root: {
    background: theme.palette.background.third,
    bottom: 0,
    height: "60px",
    left: 0,
    position: "absolute",
    right: 0,
    overflow: "hidden",
    "&.landscape": {
      left: props => props.windowHeight
    }
  }
});

const ContextNav = props => {
  function getCurrentRoute(pathname) {
    const currentRoute = pathname.slice(1);
    return currentRoute === "" ? "home" : currentRoute;
  }

  function getOrientationClass(width, height) {
    return width >= height ? "landscape" : "portrait";
  }

  const { classes, location, onNextClick, windowWidth, windowHeight } = props;
  const { pathname } = location;
  const currentRoute = getCurrentRoute(pathname);

  return (
    <nav
      className={`
        ${classes.root} 
        ${currentRoute}-screen 
        ${getOrientationClass(windowWidth, windowHeight)}
      `}
    >
      <NextLink currentRoute={currentRoute} onClick={onNextClick} />
      <HomeLink currentRoute={currentRoute} />
    </nav>
  );
};

export default withRouter(injectSheet(styles)(ContextNav));
