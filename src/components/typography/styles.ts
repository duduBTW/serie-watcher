import styled, { css } from "styled-components/native";
import { TextColorVariant, TextVariant } from ".";
import get from "lodash.get";

interface StyledTextProps {
  variant: TextVariant;
  color?: TextColorVariant;
  ml: number;
}

export const StyledText = styled.Text<StyledTextProps>`
  ${({ variant }) => {
    switch (variant) {
      case "title-01":
        return css`
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 40px;
        `;

      case "title-02":
        return css`
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
        `;

      case "title-03":
        return css`
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
        `;

      case "title-04":
        return css`
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
        `;

      case "subtitle-01":
        return css`
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
        `;

      case "subtitle-02":
        return css`
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
        `;

      case "body-01":
        return css`
          font-style: normal;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: ;
        `;

      default:
        break;
    }
  }}

  color: ${({ color, theme }) =>
    color ? get(theme.color, color) : theme.color.text.black};

  margin-left: ${({ ml }) => `${ml}px`};
`;
