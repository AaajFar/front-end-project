import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './profile.js';
import reportWebVitals from './reportWebVitals';


const usuario = [
  {name: 'Ariel',
  lastname: 'Farbiarz',
  email: 'arielfarbiarz@gmail.com',
  phone: '1155062768',
  city: 'CABA',
  state: 'Buenos Aires',
  country: 'Argentina'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile usuario={usuario}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
