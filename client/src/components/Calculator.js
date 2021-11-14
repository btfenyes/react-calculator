import React from 'react';
import styled from 'styled-components';

import Screen from './Screen';
import ButtonGrid from './ButtonGrid';
import { bgColor } from '../styles';

const Div = styled.div`
  ${bgColor}
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 2rem;
  box-shadow:  20px 20px 60px #8a9ea4, -20px -20px 60px #d4f2fa;
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
