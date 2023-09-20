import React from 'react';
import './style.css';
import Output from './output';

const Calculator = () => (
  <div className="container">
    <div className="cal-container">
      <Output />
      <span className="btn-container-one">
        <button type="button" name="AC">AC</button>
        <button type="button" name="+/-">+/-</button>
        <button type="button" name="%">%</button>
        <button type="button" name="/" className="bg-color">÷</button>
      </span>
      <span className="btn-container-two">
        <button type="button" name="7">7</button>
        <button type="button" name="8">8</button>
        <button type="button" name="9">9</button>
        <button type="button" name="*" className="bg-color">×</button>
      </span>
      <span className="btn-container-three">
        <button type="button" name="4">4</button>
        <button type="button" name="5">5</button>
        <button type="button" name="6">6</button>
        <button type="button" name="-" className="bg-color">-</button>
      </span>
      <span className="btn-container-four">
        <button type="button" name="1">1</button>
        <button type="button" name="2">2</button>
        <button type="button" name="3">3</button>
        <button type="button" name="+" className="bg-color">+</button>
      </span>
      <span className="btn-container-five">
        <button type="button" name="0" className="zero">0</button>
        <button type="button" name=".">.</button>
        <button type="button" name="=" className="bg-color">=</button>
      </span>
    </div>
  </div>
);

export default Calculator;
