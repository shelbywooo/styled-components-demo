import styled  from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => props.color};
  cursor: pointer;
  font-size: 18px;
  margin: 0 1em;
  padding: 10px 20px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.primary ? "white" : "palevioletred"};
    color: ${props => props.colorHover};
  }

`

export default Button;