import styled from 'styled-components';

import Title from './_Title';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
  margin: 30px auto;
  padding: 5px;
  position: relative;
  width: 25%;
`;

Card.Title = Title;

export default Card;