import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  height: 50px;

  text-align: center;
  border-radius : 5px;
  margin: 20px;
  padding: 5px;
  border: none;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.orange};
  -webkit-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  -moz-box-shadow:    0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  box-shadow:         0px 5px 10px 0px rgba(51, 50, 50, 0.63);
`

export const Title = styled.h3`
  color: ${(props) => props.theme.blue};
  font-weight: ${(props) => props.theme.bold};

  margin: 50px 0 50px 50px;
`