import React from "react";
import { CircularProgress } from "material-ui/Progress";

const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <CircularProgress thickness={6} size={30} />;
  }
};

export default Loading;
