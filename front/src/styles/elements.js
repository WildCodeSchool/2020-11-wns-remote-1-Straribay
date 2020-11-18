import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  text-align: center;
  border-radius : 5px;
  padding: 5px;
  border: none;
  color: ${(props) => props.theme.white};
  background-color: #f9813a;
`