import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectOperations, selectCurrentOperation } from '../redux/operationSlice';

const Div = styled.div`
  width: 80%;
  margin: 1rem;
  font-size: 3rem;
  padding: .2rem .6rem;

  border-radius: 1rem;
  background: #c6e3d6;
  box-shadow: inset 20px 20px 60px #9cb3a9, inset -20px -20px 60px #f0ffff;
`;

const Screen = () => {
  const operations = useSelector(selectOperations);
  const currentOperation = useSelector(selectCurrentOperation);

  const calculation = [...operations, currentOperation].map(({operator, number}, index) => {
    if (index === 0 && operator === '+') {
      return `${number}`;
    }

    return `${operator}${number}`;
  });

  return (
    <Div>
      {calculation}
    </Div>
  );
};

export default Screen;
