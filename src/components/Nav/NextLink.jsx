import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import { CircularProgress } from "material-ui/Progress";
import Color from "color";

import BlockButton from "../shared/BlockButton";
import ArrowForward from "material-ui-icons/ArrowForward";

const styles = theme => ({
  root: {
    background: theme.palette.background.green,
    left: "100%",
    position: "absolute",
    right: 0,
    width: "auto",
    transition: "all .5s",
    "&:hover": {
      background: Color(theme.palette.background.green)
        .darken(0.2)
        .string()
    },
    ".browse-screen &": {
      left: "60px"
    }
  },
  progress: {
    color: "#ffffff",
    margin: "-15px 0 0 5px"
  },
  label: {
    marginTop: "-3px",
    "& svg": {
      margin: "6px 0 0 5px"
    }
  }
});

const NextLink = props => {
  const { classes, onClick, comboIsLoading } = props;

  return (
    <BlockButton
      to="#"
      component={Link}
      classes={{ root: classes.root, label: classes.label }}
      onClick={onClick}
    >
      {!comboIsLoading ? "next" : "loading"}
      {comboIsLoading ? (
        <CircularProgress
          className={classes.progress}
          thickness={6}
          size={24}
        />
      ) : (
        <ArrowForward />
      )}
    </BlockButton>
  );
};

export default withStyles(styles)(NextLink);
