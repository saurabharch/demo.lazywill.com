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

const PictureBox = ({ vocabItem, ...props }) => {
  function getPictureSrc(vocabItem) {
    return `https://d3nstmfkiycslv.cloudfront.net/${
      vocabItem.picture.arangoKey
    }_${vocabItem.picture.hash}_800.jpeg`;
  }

  return (
    <div className={props.classes.root}>
      <img
        src={getPictureSrc(vocabItem)}
        className={props.classes.picture}
        alt=""
      />
      <PictureCredits picture={vocabItem.picture} />
    </div>
  );
};

export default injectSheet(styles)(PictureBox);
