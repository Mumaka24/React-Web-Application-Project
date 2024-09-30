// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import insuranceReducer from './features/insuranceSlice';  // Import your slice

const store = configureStore({
  reducer: {
    insurance: insuranceReducer,  // Add your reducers here
  },
});

export default store;
