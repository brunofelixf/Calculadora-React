import React, { useState } from 'react'

import './App.css'

function App() {
  const [num, setNum] = useState(0)

  function imputNum(e) {
    setNum(e.target.value)
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">11</div>
        <div className="current-operand">{num}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>+</button>
      <button onClick={imputNum} value={1}>
        1
      </button>
      <button onClick={imputNum} value={2}>
        2
      </button>
      <button onClick={imputNum} value={3}>
        3
      </button>
      <button>*</button>
      <button onClick={imputNum} value={4}>
        4
      </button>
      <button onClick={imputNum} value={5}>
        5
      </button>
      <button onClick={imputNum} value={6}>
        6
      </button>
      <button>/</button>
      <button onClick={imputNum} value={7}>
        7
      </button>
      <button onClick={imputNum} value={8}>
        8
      </button>
      <button onClick={imputNum} value={9}>
        9
      </button>
      <button>-</button>
      <button>.</button>
      <button onClick={imputNum} value={0}>
        0
      </button>
    </div>
  )
}

export default App
