import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import HowToWork from './Pages/HowToWork/HowToWork';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Users/Login';
import Registration from './Pages/Users/Registration';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
            {/* <Route path='/' element={<Users />} /> */}
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/howtowork' element={<HowToWork />} />
           
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;