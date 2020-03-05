import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-size: 25px;
  
  ${props =>
    props.coloredTitle &&
    css`
      color: palevioletred;
    `};
`;

export default Title;