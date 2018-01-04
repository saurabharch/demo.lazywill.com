import React from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Color from "color";

import SquareButton from "../shared/SquareButton";
import ArrowForward from "material-ui-icons/ArrowForward";
import InfoOutline from "material-ui-icons/InfoOutline";

const styles = theme => ({
  root: {
    background: theme.palette.background.blue,
    position: "absolute",
    left: "100%",
    marginLeft: "-60px",
    transition: "all .5s",
    "&:hover": {
      background: Color(theme.palette.background.blue)
        .darken(0.1)
        .string()
    },
    ".browse-screen &": {
      left: 0,
      marginLeft: 0
    }
  }
});

const ChangeScreenLink = props => {
  const { classes, onClick, currentRoute } = props;

  function getTarget(currentRoute) {
    if (currentRoute === "home") {
      return "/browse";
    } else {
      return "/";
    }
  }

  return (
    <SquareButton
      to={getTarget(currentRoute)}
      component={Link}
      classes={{ root: classes.root }}
      onClick={onClick}
    >
      {currentRoute === "home" && <ArrowForward />}
      {currentRoute === "browse" && <InfoOutline />}
    </SquareButton>
  );
};

export default withStyles(styles)(ChangeScreenLink);
