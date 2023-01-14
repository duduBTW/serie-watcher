import styled from "styled-components/native";

export const SearchPageContainer = styled.KeyboardAvoidingView`
  box-sizing: border-box;
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const SearchInputContainer = styled.View`
  position: relative;
`;
export const SearchInputBase = styled.TextInput`
  background-color: #ffffff;
  padding: 8px 20px;
  margin: 0px 16px 12px;
  border-radius: 2222px;
`;
