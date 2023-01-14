import styled from "styled-components/native";

export const StyledInput = styled.TextInput`
  padding: 8px 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.color.divider};
  border-width: 1px;
  margin-top: 4px;
`;
