// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer'; // Correct the path as needed

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more reducers as needed
  },
});

export default store;
