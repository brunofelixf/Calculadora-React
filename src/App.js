import React, { useState } from 'react'

import './App.css'

var result = false

function App() {
  const [num, setNum] = useState('')
  const [operator, setOperator] = useState()
  const [oldNum, setOldNum] = useState()
  //const [result, setResult] = useState(false)

  function imput2(e) {
    setNum(num + e.target.value)
    console.log('result do imput2: ' + result)
    console.log('setnum do imput2: ' + num + e.target.value)
  }
  function imputNum(e) {
    console.log('result na entrada do imputNum: ' + result)
    if (result === true) {
      //clear()
      setOldNum(num)
      setNum(e.target.value)
      result = false
      console.log('result dentro If true depois do clear: ' + result)
      console.log('num do if true: ' + num)
    } else imput2(e)
  }

  function clear() {
    setNum('')
    setOldNum('')
    //setResult(false)
    result = false
    console.log('result na função clear: ' + result)
    console.log('num dentro do clear: ' + num)
  }

  function percent() {
    setNum(num / 100)
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum('')
  }

  function calculate() {
    console.log('result na entrada do calculate:' + result)
    if (operator === '/') {
      setNum(parseFloat(oldNum) / parseFloat(num))
    } else if (operator === 'X') {
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num))
    } else if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
    //setResult(true)
    result = true
    console.log('result saída do calculate = ' + result)
  }

  return (
    <div className="wrapper">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{oldNum}</div>
          <div className="current-operand">{num}</div>
        </div>
        <button className="span-two" onClick={clear}>
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
      </div>
    </div>
  )
}

export default App
