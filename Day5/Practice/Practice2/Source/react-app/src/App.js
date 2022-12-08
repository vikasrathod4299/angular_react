import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [num1,setNum1] = useState(0)
  let [num2,setNum2] = useState(0)
  
  return (
    <div className="App">
        <input type='number' name='num1' onChange={(e)=>setNum1(e.target.value)}/>
        <input type='number' name='num2' onChange={(e)=>setNum2(e.target.value)}/>
        {num1==num2 && num1!=0 && num2!=0 && <h1>Both numbers are same</h1>}
        {num1<num2 ? <h1>{num2} is Greater</h1> : <h1>{num1} is Greater</h1>}

    </div>

);
}

export default App;
