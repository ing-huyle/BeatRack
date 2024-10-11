import { configureStore } from '@reduxjs/toolkit';
import { textReducer } from './textSlice';

const store = configureStore({
  reducer: textReducer
});

export default store;