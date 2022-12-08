import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('')
    const pull_data = (data)=>{
      setName(data)
    }
  return (
    <div className="App"> 

      <Child func={pull_data}></Child>

      <h1>{name}</h1>
    </div>  
  );
}

export default App;
