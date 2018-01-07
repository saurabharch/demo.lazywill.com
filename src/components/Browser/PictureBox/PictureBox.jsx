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
    ".portrait &": {
      position: "relative",
      width: "100%"
      //height: props => props.windowWidth
    },
    ".landscape &": {
      position: "absolute",
      left: 0,
      top: 0,
      width: props => props.windowHeight,
      bottom: 0
    }
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100%",
    ".portrait &": {
      width: "100%"
    },
    ".landscape &": {
      height: "100%"
    }
  },
  nextPicture: {
    display: "none"
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
      pictureSrc: null,
      nextPictureSrc: ""
    };

    this.toggleCreditsDetails = this.toggleCreditsDetails.bind(this);
    this.togglePictureMode = this.togglePictureMode.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      pictureSrc: this.getPictureSrc(this.props.combo),
      nextPictureSrc: this.getPictureSrc(this.props.nextCombo)
    }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.combo !== nextProps.combo) {
      if (this.props.combo.picture.id !== nextProps.combo.picture.id) {
        this.setState(
          () => ({
            pictureSrc: this.getPictureSrc(nextProps.combo)
          })
          //this.updatePictureSrc
        );
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.combo !== prevProps.combo) {
      if (this.props.combo.picture.id !== this.props.nextCombo.picture.id) {
        this.setState(() => ({
          nextPictureSrc: this.getPictureSrc(this.props.nextCombo)
        }));
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
    }, 50);
  }

  getPictureSrc(combo, size) {
    const { windowWidth, windowHeigh } = this.props;

    if (!combo) {
      return pictureLoading;
    }
    if (size) {
      return `https://d3nstmfkiycslv.cloudfront.net/${
        combo.picture.arangoKey
      }_${combo.picture.hash}_${size}.jpeg`;
    } else {
      return `https://d3nstmfkiycslv.cloudfront.net/${
        combo.picture.arangoKey
      }_${combo.picture.hash}_${this.getPictureSize(
        windowWidth,
        windowHeigh
      )}.jpeg`;
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

  getPictureSize = (width, heigh) => {
    const minDimension = width > heigh ? heigh : width;

    if (minDimension <= 400) {
      return "400";
    } else if (minDimension <= 600) {
      return "600";
    } else if (minDimension <= 800) {
      return "800";
    } else {
      return "1000";
    }
  };

  preloadNextActiveComboImage(combo) {
    const img = new Image();
    img.src = this.getPictureSrc(combo);
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
    const { classes, combo, nextCombo } = this.props;
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
            <img
              className={classes.nextPicture}
              src={this.state.nextPictureSrc}
              alt=""
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(PictureBox);
