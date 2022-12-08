import Calc from './component/calc';
import './App.css';
import { useState } from 'react';

function App() {
  let [num1,setNum1]=useState(0);
  let [num2,setNum2]=useState(0);
  let [opr,setOpr]=useState('');

  return (
    <div className="App">

      <input type='number' name='num1' onChange={(e)=>setNum1(e.target.value)}/>
      <input type='number' name='num1' onChange={(e)=>setNum2(e.target.value)}/>

      <select onChange={(e)=>setOpr(e.target.value)}>
      <option selected disabled>Opration</option>

          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
      </select>
      <Calc num1={num1} num2={num2} opr={opr}/>
    </div>
  );
}

export default App;
