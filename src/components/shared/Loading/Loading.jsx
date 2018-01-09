import React from "react";
import { CircularProgress } from "material-ui/Progress";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-20px 0 0 -20px"
  }
});

const Loading = props => {
  const { error, classes } = props;

  if (error) {
    return <div>Error!</div>;
  } else {
    return (
      <CircularProgress className={classes.root} thickness={6} size={40} />
    );
  }
};

export default withStyles(styles)(Loading);
