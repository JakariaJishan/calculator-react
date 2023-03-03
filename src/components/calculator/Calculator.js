/*eslint-disable */
import React, { useState } from "react";
import calculate from "../../logic/calculate";
import "./calculator.css";

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
  });
  const clickHandler = (e) => {
    const name = e.target.getAttribute("name");
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
              {total} {operation} {next}
            </p>
          ) : (
            0
          )}
        </div>
        <div className="keys">
          <button
            className="ac"
            name="AC"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            AC
          </button>
          <button
            className="plus-minus"
            name="+/-"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            +/-
          </button>
          <button
            className="percent"
            name="%"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            %
          </button>
          <button
            className="division"
            name="÷"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            ÷
          </button>
          <button
            className="seven"
            name="7"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            7
          </button>
          <button
            className="eight"
            name="8"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            8
          </button>
          <button
            className="nine"
            name="9"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            9
          </button>
          <button
            className="multiply"
            name="x"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            x
          </button>
          <button
            className="four"
            name="4"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            4
          </button>
          <button
            className="five"
            name="5"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            5
          </button>
          <button
            className="six"
            name="6"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            6
          </button>
          <button
            className="minus"
            name="-"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            -
          </button>
          <button
            className="one"
            name="1"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            1
          </button>
          <button
            className="two"
            name="2"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            2
          </button>
          <button
            className="three"
            name="3"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            3
          </button>
          <button
            className="plus"
            name="+"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            +
          </button>
          <button
            className="zero"
            name="0"
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            0
          </button>
          <button
            className="dot"
            name="."
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            .
          </button>
          <button
            className="equal"
            name="="
            onClick={clickHandler}
            onKeyDown={clickHandler}
            aria-hidden="true"
            type="button"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
