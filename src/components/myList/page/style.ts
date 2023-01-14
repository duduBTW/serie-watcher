import styled, { css } from "styled-components/native";
import { TabVariamt } from ".";

export const MyListPageContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background.main};
`;

interface TabItemProps {
  variant: TabVariamt;
}
export const TabItem = styled.Pressable<TabItemProps>`
  margin-right: 8px;
  padding: 4px 12px;
  border-radius: 2222px;
  align-items: center;

  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return css`
          background-color: ${({ theme }) => theme.color.secondary.main};
        `;

      case "outlined":
        return css`
          border-color: ${({ theme }) => theme.color.secondary.main};
          border-width: 1px;
        `;

      default:
        break;
    }
  }}
`;

interface TabItemLabelProps {
  variant: TabVariamt;
}
export const TabItemLabel = styled.Text<TabItemLabelProps>`
  font-style: normal;
  font-size: 18px;
  line-height: 28px;

  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return css`
          font-weight: 700;
          color: ${({ theme }) => theme.color.text.white};
        `;

      case "outlined":
        return css`
          font-weight: 400;
          color: ${({ theme }) => theme.color.secondary.main};
        `;

      default:
        break;
    }
  }}
`;
export const TabsContainer = styled.View`
  padding: 20px 0px 4px 16px;
  display: flex;
  flex-direction: row;
`;
