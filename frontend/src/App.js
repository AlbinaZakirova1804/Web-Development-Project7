import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} 
from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import Login from './components/Login';
import Register from './components/Register'
import  ViewAll  from './components/messages/ViewAll';
import Navigation from './components/Navigation'
import Header from './components/Header'



function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <main>
      <Router>
      <Navigation/>
      <Header/>
      
            <Switch>
            
                <Route path='/login' component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/viewall" component={ViewAll} exact/>
                
            
            </Switch>
        </Router>
        </main>
  )
}

export default App;
