import { LoginData } from "../../../service/user";
import service from "../../../service";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { Platform, View } from "react-native";

// styls
import { LoadingOverlay, LoginPageContainer, LoginPageScroll } from "./styles";

// components
import Input from "../../input";
import Button from "../../button";
import Typography from "../../typography";
import SizedBox from "../../sizedBox";

const LoginPage = ({ toggleLogin }: { toggleLogin: () => void }) => {
  const formMethods = useForm<LoginData>();
  const { mutate: login, isLoading } = useMutation(service.login, {
    onSuccess: () => {
      toggleLogin();
    },
  });

  return (
    <LoginPageScroll
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <LoginPageContainer
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Typography variant="title-01">Login</Typography>

        <View>
          <FormProvider {...formMethods}>
            <SizedBox height={40} />
            <Input
              label="Username"
              name="username"
              rules={{
                required: {
                  message: "Username is required",
                  value: true,
                },
              }}
            />
            <SizedBox height={20} />
            <Input
              label="Password"
              name="password"
              secureTextEntry
              rules={{
                required: {
                  message: "Password is required",
                  value: true,
                },
              }}
              onSubmitEditing={formMethods.handleSubmit((data) => login(data))}
            />
            <SizedBox height={32} />
            <Button
              isLoading={isLoading}
              onPress={formMethods.handleSubmit((data) => login(data))}
            >
              Enter
            </Button>
          </FormProvider>
        </View>
        <View>
          <SizedBox height={40} />
          <Typography variant="subtitle-01" color="primary.main">
            Register
          </Typography>
          <SizedBox height={12} />
          <Typography variant="subtitle-01" color="primary.main">
            Forgot your password?
          </Typography>
          <SizedBox height={20} />
        </View>
        {isLoading && <LoadingOverlay />}
      </LoginPageContainer>
    </LoginPageScroll>
  );
};

export default LoginPage;
