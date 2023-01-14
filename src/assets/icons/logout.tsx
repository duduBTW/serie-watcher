import * as React from "react";
import { TextColorVariant } from "../../components/typography";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";
import get from "lodash.get";

const SvgLogOut = ({ color }: { color: TextColorVariant }) => {
  const theme = useTheme();

  return (
    <Svg width={24} height={24}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
        fill={get(theme.color, color)}
      />
    </Svg>
  );
};

export default SvgLogOut;
