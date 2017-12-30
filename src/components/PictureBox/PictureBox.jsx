import React from "react";
import injectSheet from "react-jss";

import PictureCredits from "../PictureCredits/";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%"
  },
  picture: {
    width: "100%"
  }
});

const PictureBox = ({ combo, ...props }) => {
  function getPictureSrc(combo) {
    return `https://d3nstmfkiycslv.cloudfront.net/${combo.picture.arangoKey}_${
      combo.picture.hash
    }_800.jpeg`;
  }

  return (
    <div className={props.classes.root}>
      <img
        src={getPictureSrc(combo)}
        className={props.classes.picture}
        alt=""
      />
      <PictureCredits picture={combo.picture} />
    </div>
  );
};

export default injectSheet(styles)(PictureBox);
