import React from "react";

const SvgEl = props => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox={props.svg.viewBox}
      width="100%"
      height="100%"
    >
      {props.svg.path}
    </svg>
  );
};

export default SvgEl;
