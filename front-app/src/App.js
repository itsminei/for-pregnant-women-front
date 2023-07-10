import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Main from'./main'
import Realtime from './componnents/rtsp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/realtime' element={<Realtime />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
