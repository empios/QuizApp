import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Api, ApiResponse } from '../Interfaces/ApiResponse';

const initialState: ApiResponse = {
  results: [{
    category: '',
    correct_answer: '',
    difficulty: '',
    incorrect_answers: [''],
    question: '',
    type: '',
  }],
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuizData: (state, action: PayloadAction<Api[]>) => {
      state.results = [];
      action.payload.map((item) => {
        state.results.push(item);
        return item;
      });
    },
  },
});

export const { setQuizData } = questionSlice.actions;

export default questionSlice.reducer;
