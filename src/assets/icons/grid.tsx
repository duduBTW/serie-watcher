import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGrid = ({ color }: { color: string }) => (
  <Svg width={24} height={24}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z"
      fill={color}
    />
  </Svg>
);

export default SvgGrid;
