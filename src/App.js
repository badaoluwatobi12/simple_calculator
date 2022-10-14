import React, { useState } from 'react';
import './index.css'


function App() {
const[val, setVal]=useState('');

const mpty =()=>{
  try {
    setVal('')
  } catch (error) {
    setVal('')
  }
}
const backSpace =()=> {
  try{
    setVal(val.slice(0, -1))
  }catch (error){
   setVal('')
  }
}

const calculate =()=>{
  try {
    setVal(eval(val))
  } catch (error) {
    setVal('Error')
  }
}
  
  return (
<div className='calculator-grid'>
<div className='output'>
<div className='previous-operand'></div>
<div className='current-operand'>{val}</div>
</div>
<button onClick={mpty} className='span-two'>AC</button>
<button onClick={backSpace}>DEL</button>
<button value='+' onClick={(e)=> setVal(val + e.target.value)}>+</button>
<button value='1' onClick={(e)=> setVal(val + e.target.value)}>1</button>
<button value='2' onClick={(e)=> setVal(val + e.target.value)}>2</button>
<button value='3' onClick={(e)=> setVal(val + e.target.value)}>3</button>
<button value='/' onClick={(e)=> setVal(val + e.target.value)}>/</button>
<button value='4' onClick={(e)=> setVal(val + e.target.value)}>4</button>
<button value='5' onClick={(e)=> setVal(val + e.target.value)}>5</button>
<button value='6' onClick={(e)=> setVal(val + e.target.value)}>6</button>
<button value='*' onClick={(e)=> setVal(val + e.target.value)}>*</button>
<button value='7' onClick={(e)=> setVal(val + e.target.value)}>7</button>
<button value='8' onClick={(e)=> setVal(val + e.target.value)}>8</button>
<button value='9' onClick={(e)=> setVal(val + e.target.value)}>9</button>
<button value='-' onClick={(e)=> setVal(val + e.target.value)}>-</button>
<button value='.' onClick={(e)=> setVal(val + e.target.value)}>.</button>
<button value='0' onClick={(e)=> setVal(val + e.target.value)}>0</button>
<button className='span-two' value='' onClick={calculate}>=</button>
</div>
  )
}

export default App