import styled from "styled-components/native";

interface EpisodeCardContainerProps {
  width: number;
}
export const EpisodeCardContainer = styled.View<EpisodeCardContainerProps>`
  width: ${({ width }) => `${width - 48}px`};
  height: 180px;
  background-color: ${({ theme }) => theme.color.secondary.main};
  border-radius: 12px;
  margin-left: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.text.black};
  position: relative;
`;

export const BackgroundImage = styled.ImageBackground`
  opacity: 0.24;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const EpisodeContent = styled.View`
  padding: 12px;
  flex: 1;
`;

export const Spacer = styled.View`
  flex: 1;
`;

export const ShowName = styled.Text`
  color: ${({ theme }) => theme.color.text.white};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

export const Episode = styled.Text`
  color: ${({ theme }) => theme.color.text.white};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;
