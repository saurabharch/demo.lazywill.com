import React from "react";
import injectSheet from "react-jss";
import { withRouter } from "react-router";

import HomeLink from "./HomeLink";
import NextLink from "./NextLink";
import SubscribeLink from "./SubscribeLink";

const styles = theme => ({
  root: {
    background: theme.palette.background.third,
    bottom: 0,
    height: "60px",
    left: 0,
    position: "absolute",
    right: 0,
    overflow: "hidden",
    "&.landscape.browse-screen": {
      left: props => props.windowHeight
    }
  }
});

const ContextNav = props => {
  const {
    classes,
    location,
    windowWidth,
    windowHeight,
    seenCombos,
    unseenCombos,
    history
  } = props;
  const { pathname } = location;
  const currentRoute = getCurrentRoute(pathname);

  function getCurrentRoute(pathname) {
    const currentRoute = pathname.slice(1);
    return currentRoute === "" ? "home" : currentRoute;
  }

  function getOrientationClass(width, height) {
    return width >= height ? "landscape" : "portrait";
  }

  function onNextClick() {
    if (seenCombos === 25 || unseenCombos === 1) {
      history.push("/subs");
    }

    if (unseenCombos > 1) {
      props.onNextClick();
    }
  }

  return (
    <nav
      className={`
        ${classes.root}         
        ${seenCombos > 10 ? "subs-button" : ""}
        ${currentRoute}-screen 
        ${getOrientationClass(windowWidth, windowHeight)}
      `}
    >
      <NextLink
        currentRoute={currentRoute}
        onClick={onNextClick}
        windowWidth={windowWidth}
      />
      <HomeLink currentRoute={currentRoute} />
      <SubscribeLink currentRoute={currentRoute} />
    </nav>
  );
};

export default withRouter(injectSheet(styles)(ContextNav));
