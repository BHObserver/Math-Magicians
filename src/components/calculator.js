import React from 'react';
import './style.css';
import Output from './output';

const Calculator = () => (
  <div className="container">
    <div className="cal-container">
      <Output />
      <span className="btn-container-one">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="bg-color">÷</button>
      </span>
      <span className="btn-container-two">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="bg-color">×</button>
      </span>
      <span className="btn-container-three">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="bg-color">-</button>
      </span>
      <span className="btn-container-four">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="bg-color">+</button>
      </span>
      <span className="btn-container-five">
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="bg-color">=</button>
      </span>
    </div>
  </div>
);

export default Calculator;
