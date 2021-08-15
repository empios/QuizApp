import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './slices/questionSlice';
import { answerSlice } from './slices/answerSlice';

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    answers: answerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
