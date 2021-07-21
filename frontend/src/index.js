//import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import Register from './components/Signup';
import Header from './components/Header';
import Login from './components/Login'
import ViewAll from './components/messages/ViewAll'
import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
        <Navigation/>
        <App />
    </BrowserRouter>, 
  document.getElementById('root')
)


/*function Header() {
  return(<h1>Welcome to Messager!</h1>)
}*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
