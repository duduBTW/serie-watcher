import styled from "styled-components/native";

export const EpisodeCardDenseContainer = styled.View`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const miniatureWidth = 120;
export const EpisodeMiniature = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  border-width: 2px;
  width: ${`${miniatureWidth}px`};
  height: 100%;
  border-color: ${({ theme }) => theme.color.secondary.main};
  z-index: 2;
`;

export const EpisodeInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.secondary.main};
  padding: 20px 16px;
  box-sizing: border-box;
  border-radius: 12px;
  padding-left: ${`${miniatureWidth + 16}px`};
`;
