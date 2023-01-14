import { useEffect, useState } from "react";
import service from "./src/service";
import theme from "./src/constants/theme";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

// pages
import HomePage from "./src/components/home/page";
import LoginPage from "./src/components/login/page";
import EpisodePage from "./src/components/episode/page";
import SeriePage from "./src/components/serie/page";
import SearchPage from "./src/components/search/page";
import MyListPage from "./src/components/myList/page";
import UserPage from "./src/components/user/page";

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  MyList: undefined;
  User: undefined;
  Episode: { episodeId: string; episodeUrl: string };
  Serie: { serieId: string; title?: string; miniature: string };
};

export type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [isLogged, setIsLogged] = useState<boolean | undefined>();

  useEffect(() => {
    const validateLogin = async () => {
      setIsLogged(await service.validateToken());
    };

    validateLogin();
  }, []);

  // Validating login
  if (isLogged === undefined) return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitle: "",
              title: "",
              animation: "flip",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: theme.color.background.main,
              },
            }}
          >
            {isLogged ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: theme.color.background.light,
                    },
                  }}
                />
                <Stack.Screen name="Serie" component={SeriePage} />
                <Stack.Screen name="Episode" component={EpisodePage} />
                <Stack.Screen name="Search" component={SearchPage} />
                <Stack.Screen name="MyList" component={MyListPage} />
                <Stack.Screen
                  name="User"
                  options={{
                    headerStyle: {
                      backgroundColor: theme.color.background.light,
                    },
                  }}
                >
                  {() => <UserPage toggleLogin={() => setIsLogged(false)} />}
                </Stack.Screen>
              </>
            ) : (
              <Stack.Screen
                name="Login"
                options={{
                  headerShown: false,
                }}
              >
                {() => <LoginPage toggleLogin={() => setIsLogged(true)} />}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
