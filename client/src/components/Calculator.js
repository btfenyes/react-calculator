import React from 'react';
import styled from 'styled-components';

import Screen from './Screen';
import ButtonGrid from './ButtonGrid';
import { bgColor, boxShadowColorOne, boxShadowColorTwo } from '../styles';

const Div = styled.div`
  ${bgColor}
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 2rem;
  max-width: 28rem;
  box-shadow:  1.4rem 1.4rem 2.5rem ${boxShadowColorOne}, -1.4rem -1.4rem 2.5rem ${boxShadowColorTwo};
`;

const Calculator = () => {
  return (
    <Div>
      <Screen />
      <ButtonGrid />
    </Div>
  );
};

export default Calculator;
