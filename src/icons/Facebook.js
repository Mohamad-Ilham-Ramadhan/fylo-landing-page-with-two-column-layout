import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import centeringIcon from "../utils/centeringPathInSvg";

export default function Facebook(props) {
  const pathRef = React.useRef();

  return (
    <SvgIcon {...props}>
      <g
        // style={{ fill: "#ffffff", strokeWidth: 7.75695 }}
        transform="matrix(0.12891665,0,0,0.12891665,1.9999999,1.9999999)"
        id="g3"
      >
        <path
          d="M 89.584,155.139 V 84.378 H 113.326 L 116.888,56.793 H 89.584 V 39.184 C 89.584,31.2 91.792,25.759 103.254,25.759 L 117.849,25.753 V 1.08 C 115.325,0.752 106.661,0 96.577,0 75.52,0 61.104,12.853 61.104,36.452 V 56.793 H 37.29 V 84.378 H 61.104 V 155.139 Z"
          // style={{ fill: "#ffffff", strokeWidth: 7.75695 }}
          id="f_1_"
        />
      </g>
    </SvgIcon>
  );
}
