import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users'
import Experiance from './Pages/Home/Experiance';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/home' element={<Experiance />} />
            <Route path='/users' element={<Users/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
