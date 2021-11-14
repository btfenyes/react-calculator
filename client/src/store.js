import { configureStore } from '@reduxjs/toolkit';
import operationReducer from './components/operationSlice';

export const store = configureStore({
  reducer: {
    calculator: operationReducer,
  },
});