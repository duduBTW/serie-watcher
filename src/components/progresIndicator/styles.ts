import styled from "styled-components/native";

export const ProgresIndicatorContainer = styled.View`
  overflow: hidden;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.background.main};
  border-radius: 222px;
`;

interface ProgresIndicatorProgressProps {
  progress: number;
}
export const ProgresIndicatorProgress = styled.View<ProgresIndicatorProgressProps>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary.main};
`;
