import styled from "styled-components/native";

interface PageContainerStyled {
  disableMargin?: boolean;
}
export const PageContainerStyled = styled.KeyboardAvoidingView<PageContainerStyled>`
  box-sizing: border-box;
  margin: ${({ disableMargin }) => (disableMargin ? "0px" : "20px 16px 0")};
  flex: 1;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
`;

export const PageScroll = styled.ScrollView`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background.main};
`;
