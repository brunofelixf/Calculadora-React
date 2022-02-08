import React from 'react';
import './Buttons.css';

const Buttons = ({clear, percent, operatorHandler, imputNum, calculate}) => {
  return ( 
    <>
       <button button className="span-two" onClick={clear}>
          AC
        </button>
        <button className="operator" onClick={percent} value="%">
          %
        </button>
        <button className="operator" onClick={operatorHandler} value="+">
          +
        </button>
        <button className="number" onClick={imputNum} value={1}>
          1
        </button>
        <button className="number" onClick={imputNum} value={2}>
          2
        </button>
        <button className="number" onClick={imputNum} value={3}>
          3
        </button>
        <button className="operator" onClick={operatorHandler} value="X">
          X
        </button>
        <button className="number" onClick={imputNum} value={4}>
          4
        </button>
        <button className="number" onClick={imputNum} value={5}>
          5
        </button>
        <button className="number" onClick={imputNum} value={6}>
          6
        </button>
        <button className="operator" onClick={operatorHandler} value="/">
          /
        </button>
        <button className="number" onClick={imputNum} value={7}>
          7
        </button>
        <button className="number" onClick={imputNum} value={8}>
          8
        </button>
        <button className="number" onClick={imputNum} value={9}>
          9
        </button>
        <button className="operator" onClick={operatorHandler} value="-">
          -
        </button>
        <button className="number" onClick={imputNum} value=".">
          .
        </button>
        <button className="number" onClick={imputNum} value={0}>
          0
        </button>
        <button className="span-two" onClick={calculate}>
          =
        </button>
    </>
  );
}
 
export default Buttons;
