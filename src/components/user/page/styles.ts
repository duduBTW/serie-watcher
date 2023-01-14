import styled from "styled-components/native";

export const UserPageScroll = styled.ScrollView`
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const UserPageContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.color.background.light};
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 2222px;
  margin-right: 16px;
`;

export const ListItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

export const ListItemMainContent = styled.View`
  flex: 1;
`;

export const ListItemSecondaryContent = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-right: 16px;
`;
