import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Card from '../components/Card';
import { CardProps } from '../Interfaces/CardProps';

function EndGame(): JSX.Element {
  const answers = useSelector((state:RootState) => state.answers.answers);
  const quiz = useSelector((state:RootState) => state.question.results);
  let trueAnswers = 0;
  const mappedCards: Array<CardProps> = [];
  answers.map((item, index) => {
    mappedCards.push({ question: quiz[index].question, answer: item });
    if (item) {
      if (quiz[index]) {
        if (Boolean(quiz[index].correct_answer) === item) {
          trueAnswers += 1;
        }
      }
    }
    return trueAnswers;
  });
  function playAgain(): void {
    window.location.reload();
  }
  return (
    <div className="container mx-auto">
      <div className="row text-center">
        <img className="w-1/6 lg:w-28" src="https://avatars.dicebear.com/api/male/pawel.svg" alt="avatar" />
      </div>
      <div className="mt-20 row text-center">
        <h1 className="text-3xl" style={{ color: 'white' }}>
          You scored&nbsp;
          <b className="text-5xl" style={{ color: '#FF7878' }}>{trueAnswers}</b>
          /
          {answers.length}
        </h1>
      </div>
      <div className="row text-center">
        {mappedCards.map((item) => <Card question={item.question} answer={item.answer} />)}
      </div>
      <div className="mt-24 row mx-24 md:mx-56 lg:mx-96 text-center">
        <button onClick={playAgain} className="customButton" type="button" style={{ width: '60%', height: '8vh' }}><b style={{ color: 'white' }}>Play Again</b></button>
      </div>
    </div>
  );
}

export default EndGame;
