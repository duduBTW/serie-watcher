import styled from "styled-components/native";

interface SerieCardContainerProps {
  responsive: boolean;
  width: number;
}
export const SerieCardContainer = styled.View<SerieCardContainerProps>`
  box-sizing: border-box;
  margin-left: ${({ responsive }) => (responsive ? "0px" : "12px")};
  width: ${({ responsive, width }) => {
    if (responsive) return "100%";

    // Half of the screen
    return `${(width - 48 - 12) / 2}px`;
  }};
`;

export const SerieMiniatureContainer = styled.View`
  height: 220px;
  width: 100%;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.color.primary.main};
  border-width: 2px;
  overflow: hidden;
  z-index: 2;
`;
export const SerieMiniature = styled.Image`
  height: 100%;
  width: 100%;
`;

export const SerieInfo = styled.View`
  flex: 1;
  margin-top: -12px;
  padding: 20px 10px 10px;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: ${({ theme }) => theme.color.primary.main};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.text.white};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
