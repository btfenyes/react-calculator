import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DownloadCloud, Bookmark, Delete, Download } from 'react-feather';

import { 
  add, 
  addToCurrentNumber, 
  deleteFromCurrentNumber, 
  selectCurrentOperation,
  setOperator,
  calculateAll,
  clear,
  readNumber,
  storeNumber,
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

  const operatorBtnStyle = {
    backgroundColor: '#c6852c',
  };

  return (
    <Container>
      <NumberGrid>
        {numbers.map((number) => <Button onClick={handleButtonClick} value={number}>{number}</Button>)}
        <Button onClick={handleButtonClick} value={'.'} >.</Button>
        <Button onClick={() => dispatch(calculateAll())}>=</Button>
        <Button onClick={() => dispatch(clear())}>CA</Button>
        <Button onClick={() => dispatch(deleteFromCurrentNumber())}><Delete /></Button>
        <Button onClick={() => dispatch(readNumber())}><DownloadCloud /></Button>
      </NumberGrid>
      <OperatorGrid>
        {operators.map((operator) => (
          <Button 
            style={operatorBtnStyle} 
            onClick={handleOperatorClick} 
            value={operator.operator}
          >
            {operator.text}
          </Button>
        ))}
        <Button onClick={() => dispatch(storeNumber())}><Bookmark /></Button>
      </OperatorGrid>
    </Container>
  );
};

export default ButtonGrid;
