import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DownloadCloud, Bookmark, Delete } from 'react-feather';

import {
  addToCurrentNumber, 
  deleteFromCurrentNumber,
  setOperator,
  calculateAll,
  clear,
  readNumber,
  storeNumber,
} from './operationSlice';

import Button from './Button';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ButtonGrid = () => {
  const dispatch = useDispatch();

  const handleNumberButtonClick = (number) => {
    dispatch(addToCurrentNumber(number));
  };

  const handleOperatorClick = (operator) => {
    dispatch(setOperator(operator));
  };

  const handleEqualsClick = () => {
    dispatch(calculateAll());
  };

  const handleDeleteClick = () => {
    dispatch(deleteFromCurrentNumber());
  };

  const keyDownHandler = (e) => {
    if (['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
      handleNumberButtonClick(e.key);
    }

    if (['+', '-', '*', '/'].includes(e.key)) {
      handleOperatorClick(e.key);
    }

    if (e.key === 'Backspace') {
      handleDeleteClick();
    }

    if (e.key === 'Enter') {
      handleEqualsClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const operatorBtnStyle = {
    backgroundColor: '#c6852c',
  };

  return (
    <Container>
        <Button onClick={() => dispatch(clear())}>CA</Button>
        <Button onClick={handleDeleteClick}><Delete /></Button>
        <Button onClick={() => dispatch(readNumber())}><DownloadCloud /></Button>
        <Button onClick={() => dispatch(storeNumber())}><Bookmark /></Button>

        {[1, 2, 3].map((number) => <Button onClick={() => handleNumberButtonClick(number)}>{number}</Button>)}
        <Button style={operatorBtnStyle} onClick={() => handleOperatorClick('+')}>
          +
        </Button>

        {[4, 5, 6].map((number) => <Button onClick={() => handleNumberButtonClick(number)}>{number}</Button>)}
        <Button style={operatorBtnStyle} onClick={() => handleOperatorClick('-')} value="-">
          -
        </Button>

        {[7, 8, 9].map((number) => <Button onClick={() => handleNumberButtonClick(number)}>{number}</Button>)}
        <Button style={operatorBtnStyle} onClick={() => handleOperatorClick('*')} value="*">
          ×
        </Button>
      
        <Button onClick={handleEqualsClick}>=</Button>
        <Button onClick={() => handleNumberButtonClick(0)}>0</Button>
        <Button onClick={() => handleNumberButtonClick('.')}>.</Button>
        <Button style={operatorBtnStyle} onClick={() => handleOperatorClick('/')}>
          ÷
        </Button>
    </Container>
  );
};

export default ButtonGrid;
