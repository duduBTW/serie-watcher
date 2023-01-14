import { StyledText } from "./styles";
import { TextProps } from "react-native";
import theme from "../../constants/theme";

// https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

export type TextVariant =
  | "title-01"
  | "title-02"
  | "title-03"
  | "title-04"
  | "subtitle-01"
  | "subtitle-02"
  | "body-01";

export type TextColorVariant = DotNestedKeys<typeof theme.color>;

export interface Props extends Partial<TextProps> {
  variant?: TextVariant;
  color?: TextColorVariant;
  children: React.ReactNode;
  ml?: number;
}

const Typography = ({
  variant = "body-01",
  children,
  color = "text.black",
  ml = 0,
  ...rest
}: Props) => {
  return (
    <StyledText {...rest} color={color} variant={variant} ml={ml}>
      {children}
    </StyledText>
  );
};

export default Typography;
