import { configureStore } from '@reduxjs/toolkit';
import operationReducer from './redux/operationSlice';

export const store = configureStore({
  reducer: {
    calculator: operationReducer,
  },
});