import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from'./main'
import './App.css';
import Realtime from './componnents/rtsp';
import MainAdmin from './mainadmin'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/realtime' element={<Realtime />}></Route>
          <Route path='/admin' element={<MainAdmin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
