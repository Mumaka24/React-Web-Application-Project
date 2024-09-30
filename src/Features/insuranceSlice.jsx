// src/features/insuranceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API response
const mockApiResponse = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, company: 'Company A', price: 500, coverage: 'Comprehensive' },
        { id: 2, company: 'Company B', price: 450, coverage: 'Third-Party, Fire, and Theft' },
        { id: 3, company: 'Company C', price: 600, coverage: 'Comprehensive' },
      ]);
    }, 1000);  // Simulate a 1-second API delay
  });
};

// Thunk to fetch insurance quotations
export const fetchQuotations = createAsyncThunk(
  'insurance/fetchQuotations',
  async (formData, thunkAPI) => {
    try {
      const response = await mockApiResponse(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState: {
    quotations: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuotations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quotations = action.payload;
      })
      .addCase(fetchQuotations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default insuranceSlice.reducer;
