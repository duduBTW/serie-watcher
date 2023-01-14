import * as React from "react";
import { TextColorVariant } from "../../components/typography";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";
import get from "lodash.get";

const SvgArrowRight = ({ color }: { color: TextColorVariant }) => {
  const theme = useTheme();

  return (
    <Svg width={24} height={24}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
        fill={get(theme.color, color)}
      />
    </Svg>
  );
};

export default SvgArrowRight;
