import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
