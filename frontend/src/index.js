import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/Banner';
//import Register from './components/Register';
import Header from './components/Header';
import Login from './components/Login'

/*ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
  <Banner />
  <Header/>
  <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*function Header() {
  return(<h1>Welcome to Messager!</h1>)
}*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
