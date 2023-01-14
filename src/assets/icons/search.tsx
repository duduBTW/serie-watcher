import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSearch = ({ color }: { color: string }) => (
  <Svg width={24} height={24}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
      fill={color}
    />
  </Svg>
);

export default SvgSearch;
