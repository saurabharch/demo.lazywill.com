import React from "react";
import injectSheet from "react-jss";

import PictureCredits from "../PictureCredits/";
import SpotArea from "../SpotArea/";
import PictureModeToggle from "./PictureModeToggle";
import SvgEl from "../../shared/SvgEl/";
import { LOGOS } from "../../../constants/logos";
import pictureLoading from "../../../images/pictureloading.gif";

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
  }
});

class PictureBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsOpened: false,
      pictureMode: false,
      pictureSrc: null
    };

    this.toggleCreditsDetails = this.toggleCreditsDetails.bind(this);
    this.togglePictureMode = this.togglePictureMode.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      pictureSrc: this.getPictureSrc(this.props.combo)
    }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.combo !== nextProps.combo) {
      if (this.props.combo.picture !== nextProps.combo.picture) {
        this.setState(
          () => ({
            pictureSrc: this.getPictureSrc(null)
          }),
          this.updatePictureSrc
        );
      }
    }
  }

  updatePictureSrc() {
    setTimeout(() => {
      this.setState(() => {
        return {
          pictureSrc: this.getPictureSrc(this.props.combo)
        };
      });
    }, 5);
  }

  getPictureSrc(combo) {
    if (!combo) {
      return pictureLoading;
    }
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

  render() {
    const combo = this.props.combo;
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
              src={this.state.pictureSrc}
              className={classes.picture}
              alt=""
            />
            <SpotArea spot={combo.spot} />
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(PictureBox);
