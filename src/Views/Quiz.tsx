import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { RootState } from '../store';
import { addNewAnswer } from '../slices/answerSlice';

function Home(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const quiz = useSelector((state: RootState) => state.question.results);
  const dispatch = useDispatch();
  function handleClick(bool: boolean): void {
    setCurrent(current + 1);
    dispatch(addNewAnswer(bool));
  }
  return (
    <div className="container mx-auto">
      <div className="row text-center">
        <QuizForm quiz={quiz} current={current} />
      </div>
      <div className="row text-center">
        <button type="button" onClick={() => handleClick(true)} className="customButton" style={{ width: '20%', height: '8vh' }}><b style={{ color: 'white' }}>True</b></button>
      </div>
      <div className="row text-center mt-4">
        <button type="button" onClick={() => handleClick(false)} className="customButton" style={{ width: '20%', height: '8vh' }}><b style={{ color: 'white' }}>False</b></button>
      </div>
    </div>
  );
}

export default Home;
