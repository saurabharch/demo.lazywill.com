import React from "react";
import injectSheet from "react-jss";
import InfoOutline from "material-ui-icons/InfoOutline";
import Close from "material-ui-icons/Close";

import BlockButton from "../BlockButton";

const styles = theme => ({
  root: {
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%"
  },
  button: {
    textAlign: "left"
  },
  credits: {
    background: "rgba(0,0,0,0.7)",
    display: "none",
    overflow: "hidden",
    padding: "1.5em",
    "& img": {
      float: "left",
      margin: "0 1em 0 0"
    }
  },
  links: {
    "& p": {
      color: "#ddd",
      fontSize: ".95em",
      margin: "0 0 .6em 0"
    },
    "& p:last-child": {
      margin: 0
    },
    "& i": {
      color: "#999",
      fontSize: "0.9em"
    },
    "& a": {
      color: "#fff",
      textDecoration: "none"
    },
    "& a:hover": {
      color: theme.palette.background.accent
    }
  }
});

const PictureCredits = ({
  picture,
  classes,
  onClick,
  creditsOpened,
  ...props
}) => {
  function getPictureSrc(picture) {
    return `https://d3nstmfkiycslv.cloudfront.net/${picture.arangoKey}_${
      picture.hash
    }_prv.jpeg`;
  }

  console.log(creditsOpened);

  return (
    <div className={classes.root}>
      <div
        className={classes.button}
        style={{ textAlign: creditsOpened ? "right" : "left" }}
      >
        <BlockButton
          look={
            creditsOpened ? "squareTransparentDark" : "squareTransparentLight"
          }
          onClick={onClick}
        >
          {creditsOpened ? <Close /> : <InfoOutline />}
        </BlockButton>
      </div>
      <div
        className={classes.credits}
        style={{ display: creditsOpened ? "block" : "none" }}
      >
        <a href="" target="_blank">
          <img src={getPictureSrc(picture)} />
        </a>
        <div className={classes.links}>
          <p>
            <i>author:</i>{" "}
            <a href={picture.authorUrl} target="_blank">
              {picture.authorName}
            </a>
          </p>
          <p>
            <i>source:</i>{" "}
            <a href={picture.sourceUrl} target="_blank">
              {picture.sourceName}
            </a>
          </p>
          <p>
            <i>licence:</i>{" "}
            <a href={picture.licenceUrl} target="_blank">
              {picture.licenceName}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(PictureCredits);

{
  /* <div class="credits" *ngIf="opened">
  <a href="{{picture.credits.sourceUrl}}" target="_blank">
    <img src="http://d3nstmfkiycslv.cloudfront.net/{{picture._key}}_{{picture.hash}}_prv.jpeg" >
  </a>
  <div class="links">
    <p><em>author:</em> <a href="{{picture.credits.authorUrl}}" target="_blank">{{picture.credits.authorName}}</a></p>
    <p><em>source:</em> <a href="{{picture.credits.sourceUrl}}" target="_blank">{{picture.credits.sourceName}}</a></p>
    <p><em>licence:</em> <a href="{{picture.credits.licence.url}}" target="_blank">{{picture.credits.licence.name}}</a></p>
  </div>
  <div class="close" (click)="onToggle();">
    <i class="material-icons">clear</i>
  </div>
</div> */
}
