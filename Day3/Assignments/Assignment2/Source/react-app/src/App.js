import './App.css';
import AreaOfRectengle from './components/areaOfRectengle';
import Login from './components/login';
import SignUp from './components/signUp';

function App() {
  return (
    <div className='d-flex justify-content-around'>
      <AreaOfRectengle></AreaOfRectengle>
      <Login></Login>
      <SignUp></SignUp>
      </div>
  );
}

export default App;
