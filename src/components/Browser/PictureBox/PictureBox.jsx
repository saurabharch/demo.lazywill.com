import React from "react";
import injectSheet from "react-jss";
import { CircularProgress } from "material-ui/Progress";

import PictureCredits from "../PictureCredits/";
import SpotArea from "../SpotArea/";
import PictureModeToggle from "./PictureModeToggle";
import SvgEl from "../../Common/SvgEl/";
import { LOGOS } from "../../../constants/logos";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%"
  },
  picture: {
    width: "100%"
  },
  logo: {
    width: "50px",
    position: "absolute",
    top: "15px",
    left: "15px",
    ".picture-mode &": {
      display: "none"
    }
  },
  progress: {
    color: "#ffffff",
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%,-50%)"
  }
});

class PictureBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsOpened: false,
      pictureMode: false,
      pictureLoading: false
    };

    this.toggleCreditsDetails = this.toggleCreditsDetails.bind(this);
    this.togglePictureMode = this.togglePictureMode.bind(this);
    this.togglePictureLoading = this.togglePictureLoading.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCombo = prevProps.comboQuery.Combo;
    const combo = this.props.comboQuery.Combo;

    if (prevCombo !== combo) {
      if (prevCombo === undefined || prevCombo.picture !== combo.picture) {
        this.setState(prevState => ({
          pictureLoading: true
        }));
      }
    }
  }

  getPictureSrc(combo) {
    return `https://d3nstmfkiycslv.cloudfront.net/${combo.picture.arangoKey}_${
      combo.picture.hash
    }_${this.getPictureSize()}.jpeg`;
  }

  getPictureSize() {
    const windowWidth = window.innerWidth;
    const windowHeigh = window.innerHeight;
    const minDimension = windowWidth > windowHeigh ? windowHeigh : windowWidth;

    if (minDimension <= 400) {
      return "400";
    } else if (minDimension <= 600) {
      return "600";
    } else if (minDimension <= 800) {
      return "800";
    } else {
      return "1000";
    }
  }

  getSpot(spot) {
    if (this.state.pictureLoading) {
      return {
        x: 40,
        y: 40,
        width: 20,
        height: 20
      };
    } else {
      return spot;
    }
  }

  toggleCreditsDetails() {
    this.setState(prevState => ({
      detailsOpened: !prevState.detailsOpened
    }));
  }

  togglePictureMode() {
    this.setState(prevState => ({
      pictureMode: !prevState.pictureMode
    }));
  }

  togglePictureLoading() {
    this.setState(prevState => ({
      pictureLoading: !prevState.pictureLoading
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
              onLoad={this.togglePictureLoading}
            />
            <SpotArea spot={this.getSpot(combo.spot)} />
            <PictureModeToggle
              onClick={this.togglePictureMode}
              pictureMode={pictureMode}
            />
            <div className={classes.logo}>
              <SvgEl svg={LOGOS.MAIN} />
            </div>
            <PictureCredits
              picture={combo.picture}
              detailsOpened={this.state.detailsOpened}
              onClick={this.toggleCreditsDetails}
            />
            {this.state.pictureLoading && (
              <CircularProgress
                className={classes.progress}
                thickness={6}
                size={30}
              />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(PictureBox);
