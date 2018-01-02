import React from "react";
import { withStyles } from "material-ui/styles";
import SquareButton from "../../Common/SquareButton";
import InfoOutline from "material-ui-icons/InfoOutline";
import Close from "material-ui-icons/Close";

const styles = theme => ({
  root: {
    background: "rgba(255,255,255,0.1)",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translateY(-100%)",
    color: "rgba(255,255,255,0.5)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      color: "rgba(255,255,255,1)"
    },
    ".opened &": {
      background: "rgba(0,0,0,0.7)",
      left: "auto",
      right: 0,
      color: "rgba(255,255,255,1)",
      "@media (min-width: 500px)": {
        transform: "none",
        background: "rgba(0,0,0,0)"
      }
    }
  }
});

const CreditsDetailsToggle = props => {
  const { classes, detailsOpened, onClick } = props;

  return (
    <SquareButton classes={{ root: classes.root }} onClick={onClick}>
      {detailsOpened ? <Close /> : <InfoOutline />}
    </SquareButton>
  );
};

export default withStyles(styles)(CreditsDetailsToggle);
