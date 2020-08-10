import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import centeringIcon from "../utils/centeringPathInSvg";

export default function Email(props) {
  const pathRef = React.useRef();

  React.useEffect(() => {
    centeringIcon(pathRef.current);
  }, []);
  return (
    <SvgIcon {...props}>
      <path
        ref={pathRef}
        d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
      />
    </SvgIcon>
  );
}
