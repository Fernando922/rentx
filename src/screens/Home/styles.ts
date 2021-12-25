import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
`;

export const Title = styled.Text`
  font-size: 50px;
`;
