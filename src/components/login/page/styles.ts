import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const LoginPageContainer = styled.KeyboardAvoidingView`
  box-sizing: border-box;
  padding-top: ${`${StatusBar.currentHeight ?? 0}px`};
  margin: 40px 16px 0;
  flex: 1;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
`;

export const LoginPageScroll = styled.ScrollView`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const LoadingOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 200%;
  width: 200%;
  background-color: ${({ theme }) => theme.color.background.main};
  opacity: 0.6;
  z-index: 2;
`;
