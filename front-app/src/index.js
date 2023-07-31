import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> 오류를 쉽게 포착하기 위해 의도적으로 2번 console.log가 실행됨.
    <App />
  //</React.StrictMode>
);
