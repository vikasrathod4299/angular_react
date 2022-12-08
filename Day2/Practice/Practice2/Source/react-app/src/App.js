import { useState } from 'react';
import './App.css';
import Alphabets from './component/aToz';

function App() {
  let [fname,setFname]=useState('');
  let [lname,setLname]=useState('');
  let [form,setForm]=useState({});

  const handleForm = (prev)=>{
    
  }  
  return (
    <div className="App">

      <input type='text' onChange={(e)=>setFname(e.target.value)} />
      <input type='text' onChange={(e)=>setLname(e.target.value)} />
      <button onClick={handleForm}>submit</button>
      {/* <Alphabets ></Alphabets> */}
      
    </div>
  );
}

export default App;
