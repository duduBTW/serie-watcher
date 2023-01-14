import styled from "styled-components/native";

export const BaseButton = styled.Pressable`
  color: red;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.primary.main};
  align-items: center;
  padding: 8px 12px;
  z-index: 4;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.color.text.white};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;
