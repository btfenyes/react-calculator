import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { 
  add, 
  addToCurrentNumber, 
  setCurrentOperator, 
  selectCurrentOperation,
  setOperator,
  calculateAll,
  clear,
} from '../redux/operationSlice';

import Button from './Button';

const Container = styled.div`
  display: flex;
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const OperatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const ButtonGrid = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = [
    { 
      operator: '+',
      text: '+',
    },
    { 
      operator: '-',
      text: '-',
    },
    { 
      operator: '*',
      text: '×',
    },
    { 
      operator: '/',
      text: '÷',
    },
  ];
  const dispatch = useDispatch();
  const currentOperation = useSelector(selectCurrentOperation);

  const handleButtonClick = (e) => {
    const number = e.target.value;
    dispatch(addToCurrentNumber(number));
  };

  const handleOperatorClick = (e) => {
    const operator = e.target.value;
    dispatch(setOperator(operator));
  };

  return (
    <Container>
      <NumberGrid>
        {numbers.map((number) => <Button onClick={handleButtonClick} value={number}>{number}</Button>)}
        <Button onClick={handleButtonClick} value={'.'} >.</Button>
        <Button onClick={() => dispatch(calculateAll())}>=</Button>
        <Button onClick={() => dispatch(clear())}>C</Button>
      </NumberGrid>
      <OperatorGrid>
        {operators.map((operator) => <Button onClick={handleOperatorClick} value={operator.operator}>{operator.text}</Button>)}
      </OperatorGrid>
    </Container>
  );
};

export default ButtonGrid;
