import styled from "styled-components/native";

export const EpisodeGridContainer = styled.View`
  box-sizing: border-box;
  flex: 1;
  flex-grow: 1;
`;

export const EpisodeCardContainer = styled.View``;
export const EpisodeCardMiniatureContainer = styled.View`
  z-index: 2;
`;
export const EpisodeCardMiniature = styled.Image`
  height: 180px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.color.secondary.main};
  border-width: 2px;
`;
export const EpisodeInfo = styled.View`
  margin-top: -12px;
  padding: 20px 12px 8px;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: ${({ theme }) => theme.color.secondary.main};
`;
