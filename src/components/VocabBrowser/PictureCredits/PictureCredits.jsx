import React from "react";
import injectSheet from "react-jss";

import PictureCreditsToggle from "./PictureCreditsToggle";
import PictureCreditsDetails from "./PictureCreditsDetails";

const styles = theme => ({
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%"
  }
});

const PictureCredits = ({
  picture,
  classes,
  onClick,
  creditsOpened,
  ...props
}) => {
  return (
    <div className={`${classes.root} ${creditsOpened ? "opened" : ""}`}>
      <PictureCreditsToggle creditsOpened={creditsOpened} onClick={onClick} />
      <PictureCreditsDetails creditsOpened={creditsOpened} picture={picture} />
    </div>
  );
};

export default injectSheet(styles)(PictureCredits);
