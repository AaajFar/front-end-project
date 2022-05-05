import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './profile.js';
import reportWebVitals from './reportWebVitals';


const usuario = [
  {name: 'Ariel',
  lastname: 'Farbiarz',
  email: 'arielfarbiarz@gmail.com',
  phone: '1188452587',
  city: 'CABA',
  state: 'Buenos Aires',
  country: 'Argentina'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile name= {usuario.name}
             lastname = {usuario.lastname}
             email = {usuario.email}
             phone = {usuario.phone}
             city = {usuario.city}
             state = {usuario.state}
             country = {usuario.country}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
