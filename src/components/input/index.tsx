import {
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { TextInputProps } from "react-native";

// components
import Typography from "../typography";

// styles
import { StyledInput } from "./styles";

interface Props
  extends Omit<
    TextInputProps,
    "value" | "onChangeText" | "ref" | "onBlur" | "defaultValue"
  > {
  label?: string;
  name: string;
  rules?: RegisterOptions;
  defaultValue?: string;
}

const Input = ({ label, name, rules, defaultValue, ...inputProps }: Props) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <>
      {label && <Typography variant="subtitle-01">{label}</Typography>}
      <StyledInput
        {...inputProps}
        onBlur={onBlur}
        ref={ref}
        value={value}
        onChangeText={onChange}
      />
      {error && (
        <Typography color="error.main" variant="subtitle-02">
          {error.message}
        </Typography>
      )}
    </>
  );
};

export default Input;
