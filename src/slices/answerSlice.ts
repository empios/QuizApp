import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answers {
    answers: Array<boolean>
}
const initialState: Answers = {
  answers: [],
};

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addNewAnswer: (state, action: PayloadAction<boolean>) => {
      state.answers.push(action.payload);
    },
  },
});

export const { addNewAnswer } = answerSlice.actions;

export default answerSlice.reducer;
