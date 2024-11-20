// import "./App.css"
// import React, { useReducer } from 'react'
// import digitButton from "./DigitButton"
// const ACTIONS={
//   ADD_DIGIT:`add-digit`,
//   CLEAR:`clear`,
//   DELETE_DIGIT: `delete-digit`,
//   EVALUATE:`evaluate`
// }
// function reducer(state,{type,payload}){
// switch(type){
//   case ACTIONS.ADD_DIGIT:
//     return{
//       ...state,
//       currentOperand: `${currentOperand || ""}${payload.digit}`
//     }
// }
// }
// function App() {
//   const [{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{})
//   dispatch ({type:ACTIONS.ADD_DIGIT, payload: {digit:1}})
//   return (
//     <div className='calculator-grid'>
//         <div className='output'>
//             <div className='previous-operand'></div>
//             <div className='current-operand'></div>
//         </div>
//         <button className='span-two'>AC</button>
//         <button>DEL</button>
//         <digitButton digit="/" dispatch={dispatch} />
//         <button>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>*</button>
//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>+</button>
//         <button>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button>-</button>
//         <button>.</button>
//         <button>0</button>
//         <button className='span-two'>=</button>

//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import "./App.css"
function App() {
  const [value,setvalue]=useState('');
  return(
<div className="container">
    <div className="calculator">
      <form action="">
        <div className="display">
          <input type="text"  value={value}/>
        </div>
        <div>
          <input type="button" value="AC" onClick={e => setvalue('')}></input>
          <input type="button" value="DE" onClick={e=>setvalue(value.slice(0,-1))}></input>
          <input type="button" value="." onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="/" onClick={e => setvalue(value + e.target.value)}></input>

        </div>
        <div>
          <input type="button" value="7" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="8" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="9" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="*" onClick={e => setvalue(value + e.target.value)}></input>

        </div>
        <div>
          <input type="button" value="4" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="5" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="6" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="+" onClick={e => setvalue(value + e.target.value)}></input>

        </div>
        <div>
          <input type="button" value="1" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="2" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="3" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="-" onClick={e => setvalue(value + e.target.value)}></input>

        </div>
        <div>
          <input type="button" value="00" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="0" onClick={e => setvalue(value + e.target.value)}></input>
          <input type="button" value="=" className="equal" onClick={e=>setvalue(eval(value))}></input>
          
        </div>
      </form>
    </div>
  </div>
  )
}
export default App