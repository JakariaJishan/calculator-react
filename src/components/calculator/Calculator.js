import React from 'react';
import './calculator.css';

const Calculator = () => (
  <div className="wrapper">
    <div className="output">
      0
    </div>
    <div className="keys">
      <div className="ac">AC</div>
      <div className="plus-minus">+/-</div>
      <div className="percent">%</div>
      <div className="division">/</div>
      <div className="seven">7</div>
      <div className="eight">8</div>
      <div className="nine">9</div>
      <div className="multiply">*</div>
      <div className="four">4</div>
      <div className="five">5</div>
      <div className="six">6</div>
      <div className="minus">-</div>
      <div className="one">1</div>
      <div className="two">2</div>
      <div className="three">3</div>
      <div className="plus">+</div>
      <div className="zero">0</div>
      <div className="dot">.</div>
      <div className="equal">=</div>
    </div>
  </div>
);

export default Calculator;
