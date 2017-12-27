import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Button from "material-ui/Button";

const styles = theme => ({
  default: {
    background: "transparent",
    borderRadius: 0,
    border: 0,
    boxShadow: "none",
    color: "white",
    fontSize: "1.8em",
    fontWeight: 300,
    height: "100%",
    minWidth: "60px",
    textTransform: "none",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .1)"
    }
  },
  fullGreen: {
    extend: "default",
    background: theme.palette.background.accent
  },
  squareDark: {
    extend: "default",
    background: "black",
    width: "60px",
    height: "60px"
  },
  squareTransparent: {
    extend: "squareDark",
    background: "rgba(255, 255, 255, 0.2)"
  }
});

const getStyle = (classes, look) => (look ? classes[look] : classes["default"]);

const BlockButton = ({ classes, children, look }) => {
  return <Button className={getStyle(classes, look)}>{children}</Button>;
};

BlockButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  look: PropTypes.string
};

export default injectSheet(styles)(BlockButton);
