import styled from "styled-components/native";

interface DividerProps {
  responsive: boolean;
  disableMargin: boolean;
  width: number;
}
const DividerContent = styled.View<DividerProps>`
  width: ${({ width }) => `${width}px`};
  height: 1px;
  background-color: ${({ theme }) => theme.color.divider};
  margin: ${({ disableMargin }) => (!disableMargin ? "20px -16px" : "0px")};
`;

export default DividerContent;
