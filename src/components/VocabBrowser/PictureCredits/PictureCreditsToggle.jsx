import React from "react";
import { withStyles } from "material-ui/styles";
import SquareButton from "../../Common/SquareButton";
import InfoOutline from "material-ui-icons/InfoOutline";
import Close from "material-ui-icons/Close";

const styles = theme => ({
  root: {
    background: "rgba(255,255,255,0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translateY(-100%)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    ".opened &": {
      background: "rgba(0,0,0,0.7)",
      left: "auto",
      right: 0,
      "@media (min-width: 500px)": {
        transform: "none",
        background: "rgba(0,0,0,0)"
      }
    }
  }
});

const PictureCreditsToggle = props => {
  const { classes, creditsOpened, onClick } = props;

  return (
    <SquareButton classes={{ root: classes.root }} onClick={onClick}>
      {creditsOpened ? <Close /> : <InfoOutline />}
    </SquareButton>
  );
};

export default withStyles(styles)(PictureCreditsToggle);
