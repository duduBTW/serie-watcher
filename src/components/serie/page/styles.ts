import styled from "styled-components/native";

export const SeriePageContainer = styled.KeyboardAvoidingView`
  box-sizing: border-box;
  margin: 20px 16px;
  flex: 1;
`;

export const SeriePageScroll = styled.ScrollView`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const SerieMiniature = styled.Image`
  width: 132px;
  height: 188px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.color.divider};
  border-width: 1px;
`;
