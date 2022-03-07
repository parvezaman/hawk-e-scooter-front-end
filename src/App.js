import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users'
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
            {/* <Route path='/' element={<Users />} /> */}
            <Route path='/users' element={<Users/>} />
           
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;