import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Prize from './svg/Prize';
import Badge from './svg/Badge';
import { api } from '../utils/rest';
import { ApiResponse } from '../Interfaces/ApiResponse';
import { setQuizData } from '../slices/questionSlice';

function Form(): JSX.Element {
  const [select, setSelect] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const isNumber = (val: string | number): boolean => !!(val || val === 0) && !Number.isNaN(Number(val.toString()));
  function loadData(): void {
    if (isNumber(amount) && Number(amount) > 0 && Number(amount) <= 50) {
      api<ApiResponse>(`https://opentdb.com/api.php?amount=${amount}&difficulty=${select}&type=boolean`).then(({ results }) => dispatch(setQuizData(results)));
    } else {
      toast.error('Input correct value');
    }
  }
  return (
    <div className="container mx-auto">
      <div className="row mx-24 md:mx-56 lg:mx-96">
        <div className="row">
          <Prize />
          <h1 className="ml-3 inline" style={{ color: '#F7A491' }}>Difficulty</h1>
        </div>
        <select
          onChange={(e) => setSelect(e.target.value)}
          className="mt-4 block w-full border border-white-600 hover:border-white-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <option style={{ color: 'black' }} value="easy">Easy</option>
          <option style={{ color: 'black' }} value="medium">Medium</option>
          <option style={{ color: 'black' }} value="hard">Hard</option>
        </select>
      </div>
      <div className="mt-4 row mx-24 md:mx-56 lg:mx-96">
        <div className="row">
          <Badge />
          <h1 className="ml-3 inline" style={{ color: '#F7A491' }}>Amount</h1>
        </div>
        <input
          onChange={(e) => {
            if (e.target.value) {
              setAmount(e.target.value);
            }
          }}
          type="number"
          min="0"
          max="50"
          className="appearance-none mt-4 block w-full border border-white-600 hover:border-white-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: 'transparent', color: 'white' }}
        />
      </div>
      <div className="mt-24 row mx-24 md:mx-56 lg:mx-96 text-center">
        <button onClick={loadData} className="customButton" type="button" style={{ width: '60%', height: '8vh' }}><b style={{ color: 'white' }}>Play</b></button>
      </div>
    </div>
  );
}

export default Form;
