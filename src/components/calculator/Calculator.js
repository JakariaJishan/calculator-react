import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
  });
  const clickHandler = (e) => {
    const name = e.target.getAttribute('name');
    setObj(calculate(obj, name));
  };

  const { total, next, operation } = obj;
  return (
    <div className="calculator">
      <h2 className="calc-heading">Lets do some Math...</h2>
      <div className="wrapper">
        <div className="output">
          {next || operation || total ? (
            <p>
              {total}
              {' '}
              {operation}
              {' '}
              {next}
            </p>
          ) : (
            0
          )}
        </div>
        <div className="keys">
          <div
            className="ac"
            name="AC"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            AC
          </div>
          <div
            className="plus-minus"
            name="+/-"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            +/-
          </div>
          <div
            className="percent"
            name="%"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            %
          </div>
          <div
            className="division"
            name="÷"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            ÷
          </div>
          <div
            className="seven"
            name="7"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            7
          </div>
          <div
            className="eight"
            name="8"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            8
          </div>
          <div
            className="nine"
            name="9"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            9
          </div>
          <div
            className="multiply"
            name="x"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            x
          </div>
          <div
            className="four"
            name="4"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            4
          </div>
          <div
            className="five"
            name="5"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            5
          </div>
          <div
            className="six"
            name="6"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            6
          </div>
          <div
            className="minus"
            name="-"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            -
          </div>
          <div
            className="one"
            name="1"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            1
          </div>
          <div
            className="two"
            name="2"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            2
          </div>
          <div
            className="three"
            name="3"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            3
          </div>
          <div
            className="plus"
            name="+"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            +
          </div>
          <div
            className="zero"
            name="0"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            0
          </div>
          <div
            className="dot"
            name="."
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            .
          </div>
          <div
            className="equal"
            name="="
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
