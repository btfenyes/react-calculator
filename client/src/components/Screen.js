import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectOperations, selectCurrentOperation } from './operationSlice';

const Div = styled.div`
  font-family: 'Digital';

  width: 80%;
  margin: 2rem;
  font-size: 3rem;
  padding: .2rem .6rem;
  min-height: 4.4rem;
  display: flex;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
  width: 2rem;
  height: 1.2rem;
  }

  &::-webkit-scrollbar-thumb {
    height: .4rem;
    border: .2rem solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: .6rem;
    background-color: #8e8e8e;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #8e8e8e;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

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
    <Div className="custom-scrollbar">
      {calculation}
    </Div>
  );
};

export default Screen;
