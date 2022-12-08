import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fees from './components/Fees';
import Result from './components/Result';
import Home from './pages/Home';
import StdDetails from './pages/StdDetails';
import StudentList from './pages/StudentList';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' >
            <Route path='' element={<StudentList/>}/>          
            <Route path=':id' element={<StdDetails/>}>
                <Route path='fees' element={<Fees/>}/>
                <Route path='result' element={<Result/>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
