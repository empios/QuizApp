import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Wrapper from './components/Wrapper';
import Home from './Views/Home';
import { RootState } from './store';
import Quiz from './Views/Quiz';
import EndGame from './Views/EndGame';

function App(): JSX.Element {
  const results = useSelector((state: RootState) => state.question);
  const answers = useSelector((state: RootState) => state.answers);
  let wrapperSelect = false;
  if (answers.answers.length === results.results.length) {
    wrapperSelect = true;
  }
  return (
    <div>
      <div className="pt-8">
        <Wrapper select={wrapperSelect}>
          {results.results.length === 1 && <Home />}
          {answers.answers.length !== results.results.length && results.results.length > 1
          && <Quiz />}
          {answers.answers.length === results.results.length && <EndGame />}
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
