import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
