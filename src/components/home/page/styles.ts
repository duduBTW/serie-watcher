import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const HomePageContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${`${StatusBar.currentHeight ?? 0}px`};
  background-color: ${({ theme }) => theme.color.background.light};
`;

export const HomePageScroll = styled.ScrollView`
  background-color: ${({ theme }) => theme.color.background.light};
`;

// Header
export const HeaderContainer = styled.View`
  padding: 8px 16px;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background.light};
`;

export const ProfilePicture = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 2222px;
`;

export const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

// ContinueWatching
export const ContinueWatchingContainer = styled.View`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.background.light};
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #1e1e1e;
  padding: 0 0 12px 16px;
`;

// Navegation
export const NavegationContainer = styled.View`
  background-color: ${({ theme }) => theme.color.background.light};
`;
export const NavegationItemContainer = styled.View`
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;
export const NavegationItemTitle = styled.Text`
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.secondary.main};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
export const NavegationItemIndicator = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 2222px;
  background: ${({ theme }) => theme.color.secondary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeLoadingContaienr = styled.View`
  flex: 1;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const HomeLoadingImage = styled.Image`
  width: 200px;
  height: 120px;
  margin-bottom: 12px;
  border-radius: 12px;
`;
