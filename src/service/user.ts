import * as SecureStore from "expo-secure-store";
import { sleep } from "../utils/sleep";

export interface LoginData {
  username: string;
  password: string;
}

export const login = async ({ username, password }: LoginData) => {
  await sleep(1000);

  return await SecureStore.setItemAsync(
    "login_token",
    `${username}_${password}`
  );
};

export const logout = async () => {
  return await SecureStore.deleteItemAsync("login_token");
};

export const validateToken = async () =>
  Boolean(await SecureStore.getItemAsync("login_token"));
