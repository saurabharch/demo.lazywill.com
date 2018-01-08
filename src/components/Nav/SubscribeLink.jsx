import React from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Color from "color";

import SquareButton from "../shared/SquareButton";
import MailOutline from "material-ui-icons/MailOutline";

const styles = theme => ({
  root: {
    background: theme.palette.background.green,
    position: "absolute",
    right: "-60px",
    width: "60px",
    transition: "all .8s",
    "&:hover": {
      background: Color(theme.palette.background.green)
        .darken(0.1)
        .string()
    },
    ".subs-button &": {
      right: 0
    },
    ".subs-screen &, .home-screen &": {
      right: "-60px"
    }
  }
});

const SubscribeLink = props => {
  const { classes } = props;

  return (
    <SquareButton to="/subs" component={Link} classes={{ root: classes.root }}>
      <MailOutline />
    </SquareButton>
  );
};

export default withStyles(styles)(SubscribeLink);
