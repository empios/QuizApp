import * as React from 'react';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CardProps } from '../Interfaces/CardProps';

const QuizForm: React.FunctionComponent<CardProps> = (props:CardProps) => {
  const { question, answer } = props;
  return (
    <div className="p-8 mx-32 rounded mt-5 bg-white">
      <h3 className="text-purple-500 mb-4 text-sm font-bold inline">
        {parse(question)}
      </h3>
      {answer && <FontAwesomeIcon className="inline ml-5" style={{ color: 'rgba(167, 243, 208, var(--tw-bg-opacity))' }} icon={faCheck} />}
      {!answer && <FontAwesomeIcon className="inline ml-5" style={{ color: 'rgba(252, 165, 165, var(--tw-bg-opacity))' }} icon={faTimes} />}
    </div>
  );
};

export default QuizForm;
