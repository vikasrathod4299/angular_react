
import './App.css';

function App() {
  let array = [...Array(100).keys()]
  return (
    <div className="App">
      {array.map((item)=>{return <h1>{item%2==0 && item!=0 && item}</h1>})}
    </div>
  );
}

export default App;
