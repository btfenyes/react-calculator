import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  operations: [],
  currentOperation: {
    operator: '+',
    number: '',
  },
};

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    add: (state, action) => {
      // TODO: Input validation
      // if (!Number.isNaN(action.number) || ) {

      // }
      
      state.operations.push(state.currentOperation);
    },
    addToCurrentNumber: (state, action) => {
      state.currentOperation.number += action.payload;
    },
    deleteFromCurrentNumber: (state, action) => {
      const currentNum = state.currentOperation.number;
      state.currentOperation.number = currentNum.substring(0, currentNum.length - 1);
    },
    setCurrentOperator: (state, action) => {
      state.currentOperation.operator = action.payload;
    },
    resetCurrentOperation: (state, action) => {
      state.currentOperation = { operator: '', number: '' };
    },
    setOperations: (state, action) => {
      state.operations = action.payload;
    },
    setCurrentOperation: (state, action) => {
      state.currentOperation = action.payload;
    },
    clear: (state, action) => {
      state.currentOperation = {
        number: '',
        operator: '+',
      };
      state.operations = [];
    },
  },
});

export const { add, addToCurrentNumber, setCurrentOperator, clear } = operationSlice.actions;
const { resetCurrentOperation, setOperations, setCurrentOperation } = operationSlice.actions;

export const selectOperations = (state) => state.calculator.operations;
export const selectCurrentOperation = (state) => state.calculator.currentOperation;

const calculate = (num1, num2, operator) => {
  const number1 = Number(num1);
  const number2 = Number(num2);

  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
  }
};

const isPriority = (operator) => ['*', '/'].includes(operator);

const getPrevNumber = (operations, currentIndex) => {
  if (currentIndex === 0) {
    return 0;
  }

  const prevOperation = operations[currentIndex - 1];

  return prevOperation.operator === '-' ? prevOperation.number * -1 : prevOperation.number;
};

export const setOperator = (operator) => (dispatch, getState) => {
  const state = getState().calculator;
  if (state.operations.length === 1 && state.currentOperation.number === '') {
    return;
  }

  if (state.currentOperation.number !== '') {
    dispatch(add());
    dispatch(resetCurrentOperation());
  }

  dispatch(setCurrentOperator(operator));
};

const nextIsPriority = (operations, index) => index < operations.length - 1 && isPriority(operations[index + 1].operator);

const calculatePriority = (operations) => {
  let partialResult = null;
  return operations.reduce((acc, curr, index) => {
    if (isPriority(curr.operator)) {
      const firstNum = partialResult ?? getPrevNumber(operations, index);
      const result = calculate(firstNum, curr.number, curr.operator);

      if (nextIsPriority(operations, index)) {
        partialResult = result;        
      } else {
        partialResult = null;
        const operator = result >= 0 ? '+' : '-';
        return [...acc, { operator, number: Math.abs(result) }];
      }
    }

    if (nextIsPriority(operations, index)) {
      return acc;
    } else {
      return [...acc, curr];
    }
  }, [])
};

const calculateRemainder = (operations) => (
  operations.reduce((acc, curr, index) => {
    if (index === 0) {
      if (curr.operator === '-') {
        return curr.number * -1;
      }

      return curr.number;
    }

    return calculate(acc, curr.number, curr.operator);
  }, 0)
);

export const calculateAll = () => (dispatch, getState) => {
  const state = getState().calculator;
  if (state.currentOperation.operator !== '' && state.currentOperation.operator !== '') {
    dispatch(add());
  }

  dispatch(resetCurrentOperation());

  const operations = selectOperations(getState());
  const partialResult = calculatePriority(operations);
  const result = calculateRemainder(partialResult);

  dispatch(setOperations([]));
  dispatch(setCurrentOperation({ number: Math.abs(result), operator: result >= 0 ? '+' : '-' }));
};

export default operationSlice.reducer;