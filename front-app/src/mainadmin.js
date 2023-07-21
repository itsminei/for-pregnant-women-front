import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';
import IMG from './img/1.png';
console.log(firebase);
const main = () => {
  return (
    <div className='main'>
      <h1>핑크 서브웨이</h1>
      <img src={IMG} alt='image'></img>
      <Link to='/realtime'>
        <button>실시간 임산부 배려석 점유 현황</button>
      </Link>
      <br />
        <button>"양보해주세요"</button>
    </div>
  );
}

export default main;
