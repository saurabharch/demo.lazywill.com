import React from "react";
import { withStyles } from "material-ui/styles";
import SquareButton from "../../shared/SquareButton";
import Visibility from "material-ui-icons/Visibility";
import VisibilityOff from "material-ui-icons/VisibilityOff";

const styles = theme => ({
  root: {
    background: "rgba(255,255,255,0.1)",
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "rgba(255,255,255,0.5)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      color: "rgba(255,255,255,1)"
    }
  }
});

const PictureModeToggle = props => {
  const { classes, onClick, pictureMode } = props;

  return (
    <SquareButton classes={{ root: classes.root }} onClick={onClick}>
      {pictureMode ? <Visibility /> : <VisibilityOff />}
    </SquareButton>
  );
};

export default withStyles(styles)(PictureModeToggle);
