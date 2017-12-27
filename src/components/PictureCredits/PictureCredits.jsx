import React from "react";
import injectSheet from "react-jss";
import InfoOutline from "material-ui-icons/InfoOutline";

import BlockButton from "../BlockButton";

const styles = theme => ({
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%"
  }
});

const PictureCredits = props => {
  return (
    <div className={props.classes.root}>
      <BlockButton look="squareTransparent">
        <InfoOutline />
      </BlockButton>
    </div>
  );
};

export default injectSheet(styles)(PictureCredits);
