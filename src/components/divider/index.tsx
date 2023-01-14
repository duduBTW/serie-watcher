import { useWindowDimensions } from "react-native";

// styles
import DividerContent from "./styles";

const Divider = ({ disableMargin = false }: { disableMargin?: boolean }) => {
  const { width } = useWindowDimensions();

  return <DividerContent disableMargin={disableMargin} width={width} />;
};

export default Divider;
