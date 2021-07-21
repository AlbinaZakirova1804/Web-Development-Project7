import React, { useState } from 'react';
import './App.css';
import 
{BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect} 
from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'

import PrivateRoute from './components/PrivateRoute';
import Home from "./components/Home";
import { AuthContext } from "./context/auth";
import Dashboard from './components/Dashboard';




function App(props) {
const [authTokens, setAuthTokens ] = useState();

const setTokens = (data) => {
  localStorage.setItem("token", JSON.stringify(data));
  setAuthTokens(data);
}

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard Page</Link>
          </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
