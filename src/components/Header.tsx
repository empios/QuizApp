import React from 'react';
import '../App.css';
import Trivia from './svg/Trivia';

function Header(): JSX.Element {
  return (
    <div className="container mx-auto pt-14">
      <div className="row">
        <h1 className="headText text-xl lg:text-4xl">Welcome to the</h1>
      </div>
      <div className="row">
        <Trivia />
      </div>
    </div>
  );
}

export default Header;
