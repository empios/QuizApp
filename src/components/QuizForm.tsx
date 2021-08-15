import * as React from 'react';
import parse from 'html-react-parser';
import { Api } from '../Interfaces/ApiResponse';

interface Props {
    quiz: Api[],
    current: number
}

const QuizForm: React.FunctionComponent<Props> = (props:Props) => {
  const { quiz, current } = props;
  function getPercent(): number {
    return Math.floor((100 * current) / quiz.length);
  }
  return (
    <div>
      <div className="row">
        <h1 className="text-6xl lg:text-8xl" style={{ color: '#FF7878' }}>{quiz[current].category}</h1>
      </div>
      <div className="row mt-8">
        <h1 className="text-lg lg:text-2xl" style={{ color: '#FF7878', letterSpacing: '20px' }}>
          Level:&nbsp;
          {quiz[current].difficulty}
        </h1>
      </div>
      <div className="row mt-10 mx-40">
        <h1 className="text-left text-xl" style={{ color: 'white' }}>
          {getPercent()}
          %
        </h1>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            style={{ width: `${String(getPercent())}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          />
        </div>
      </div>
      <div className="row mt-28 mb-28">
        <h1 className="text-xl lg:text-3xl" style={{ color: 'white' }}>{parse(quiz[current].question)}</h1>
      </div>
    </div>
  );
};

export default QuizForm;
