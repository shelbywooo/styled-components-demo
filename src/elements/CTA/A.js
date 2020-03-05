import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import ModiferConfig from '../../modifiers/_ModifierConfig';

const A = styled.a`
  color: palevioletred;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0097a7;
  }
  ${applyStyleModifiers(ModiferConfig)};
`;

export default A;