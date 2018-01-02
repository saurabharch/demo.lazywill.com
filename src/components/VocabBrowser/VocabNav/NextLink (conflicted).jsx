import React from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Color from "color";

import BlockButton from "../../Common/BlockButton";
import ArrowForward from "material-ui-icons/ArrowForward";

const styles = theme => ({
  root: {
    background: theme.palette.background.green,
    left: "60px",
    position: "absolute",
    right: 0,
    width: "auto",
    "&:hover": {
      background: Color(theme.palette.background.green)
        .darken(0.1)
        .string()
    }
  }
});

const NextLink = props => {
  const { classes, onClick } = props;

  return (
    <BlockButton
      to="#"
      component={Link}
      classes={{ root: classes.root }}
      onClick={onClick}
    >
      next <ArrowForward />
    </BlockButton>
  );
};

export default withStyles(styles)(NextLink);
