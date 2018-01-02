import React from "react";
import injectSheet from "react-jss";

import CreditsDetailsToggle from "./CreditsDetailsToggle";
import CreditsDetails from "./CreditsDetails";

const styles = theme => ({
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    ".picture-mode &": {
      display: "none"
    }
  }
});

const PictureCredits = ({
  picture,
  classes,
  onClick,
  detailsOpened,
  ...props
}) => {
  return (
    <div className={`${classes.root} ${detailsOpened ? "opened" : ""}`}>
      <CreditsDetailsToggle detailsOpened={detailsOpened} onClick={onClick} />
      <CreditsDetails picture={picture} />
    </div>
  );
};

export default injectSheet(styles)(PictureCredits);
