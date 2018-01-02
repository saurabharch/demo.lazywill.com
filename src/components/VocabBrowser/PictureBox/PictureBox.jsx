import React from "react";
import injectSheet from "react-jss";

import PictureCredits from "../PictureCredits/";
import SpotArea from "../SpotArea/";
import PictureModeToggle from "./PictureModeToggle";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%"
  },
  picture: {
    width: "100%"
  }
});

class PictureBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsOpened: false,
      pictureMode: false
    };

    this.toggleCreditsDetails = this.toggleCreditsDetails.bind(this);
    this.togglePictureMode = this.togglePictureMode.bind(this);
  }

  getPictureSrc(combo) {
    return `https://d3nstmfkiycslv.cloudfront.net/${combo.picture.arangoKey}_${
      combo.picture.hash
    }_800.jpeg`;
  }

  toggleCreditsDetails() {
    this.setState(prevState => ({
      detailsOpened: !prevState.detailsOpened
    }));
  }

  togglePictureMode() {
    console.log("togglePictureMode");
    this.setState(prevState => ({
      pictureMode: !prevState.pictureMode
    }));
  }

  render() {
    const combo = this.props.comboQuery.Combo;
    const classes = this.props.classes;
    const pictureMode = this.state.pictureMode;

    return (
      <div
        className={`${classes.root} ${
          pictureMode ? "picture-mode" : "vocab-mode"
        }`}
      >
        {combo && (
          <React.Fragment>
            <img
              src={this.getPictureSrc(combo)}
              className={classes.picture}
              alt=""
              onLoad={() => console.log("load")}
            />
            <SpotArea spot={combo.spot} />
            <PictureModeToggle
              onClick={this.togglePictureMode}
              pictureMode={pictureMode}
            />
            <PictureCredits
              picture={combo.picture}
              detailsOpened={this.state.detailsOpened}
              onClick={this.toggleCreditsDetails}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(PictureBox);
