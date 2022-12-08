
import './App.css';
import {HelloWorld} from './component/helloWorld';
import { useState } from 'react';


function App() {
  let [name, setName] = useState('')
  // console.log(name);
  return (
    <div className="App">
      <header className="App-header">

          <input type='text' onChange={(e)=>setName(e.target.value)} placeholder="Type Your name"/>
          <HelloWorld name={name}/>
      </header>
    </div>
  );
}

export default App;
