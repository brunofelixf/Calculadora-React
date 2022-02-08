import React, { useState } from 'react'

import './App.css'

import Output from './components/Output'
import Buttons from './components/Buttons';

var result = false

function App() {

  const [num, setNum] = useState('')
  const [operator, setOperator] = useState()
  const [oldNum, setOldNum] = useState()

  function imputNum(e) {
    console.log('result na entrada do imputNum: ' + result)
    if (result === true) {
      setOldNum(num)
      setNum(e.target.value)
      result = false
      console.log('result dentro If true depois do clear: ' + result)
      console.log('num do if true: ' + num)
    } else {
      setNum(num + e.target.value)
      console.log('result do imput2: ' + result)
      console.log('setnum do imput2: ' + num + e.target.value)
    }
  }

  function clear() {
    setNum('')
    setOldNum('')
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
    if(result===false){
      setNum('')
    }
  }

  function calculate() {
    let aux = num
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
    setOldNum(aux)
    result = true
    console.log('result saída do calculate = ' + result)
  }

  return (
    <div className="wrapper">
      <div className="calculator-grid">
        {
          <Output oldNum={oldNum} num={num} />
        }
        {
          <Buttons
            imputNum={imputNum}
            clear={clear}
            percent={percent}
            operatorHandler={operatorHandler}
            calculate={calculate}
          />
        }
      </div>
    </div>
  )
}

export default App
