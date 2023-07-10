import React from 'react';
import './App.css';
import image from './img/1.png';

function App() {
  return (
    <div className='main' style={{backgroundColor:'#FFEBF5'}}>
      <h1>핑크 서브웨이</h1>
      <img src={image} alt='img'></img><br/>
      <button>실시간 임산부 배려석 점유 현황</button><br/>
      <button>"양보해주세요"</button>
    </div>
  );
}

export default App;
