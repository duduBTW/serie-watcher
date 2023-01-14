import styled from "styled-components/native";

export const EpisodePageContainer = styled.KeyboardAvoidingView`
  box-sizing: border-box;
  margin: 0 16px 20px;
  flex: 1;
`;

export const EpisodePageScroll = styled.ScrollView`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const VideoContainer = styled.View`
  margin: 0 -16px 20px;
  border-radius: 12px;
`;

export const VideoNotFoundContainer = styled.View`
  box-sizing: border-box;
  margin: 0 16px 20px;
  padding: 20px 0;
  flex: 1;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const VideoNotFoundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const VideoNotFoundImageContainer = styled.View`
  margin-top: 12px;
  border-radius: 12px;
  overflow: hidden;
  width: 132px;
  height: 188px;
`;
