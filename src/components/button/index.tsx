import { PressableProps } from "react-native";
import { BaseButton, ButtonText } from "./styles";

interface Props extends PressableProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = ({ onPress, children, isLoading = false }: Props) => {
  return (
    <BaseButton onPress={onPress}>
      <ButtonText>{!isLoading ? children : "Loading..."}</ButtonText>
    </BaseButton>
  );
};

export default Button;
