import React from 'react';
import './Output.css'


const Output = ({oldNum, num}) => {
  return (
    <div className="output">
          <div className="previous-operand">{oldNum}</div>
          <div className="current-operand">{num}</div>
    </div>
    );
}
 
export default Output;