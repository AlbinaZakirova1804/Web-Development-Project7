import React, {useState} from "react"
import '../styles/login.css'
import axios from "axios"
import {Link, Router, Route, Redirect} from "react-router-dom"
import Dashboard from "./Dashboard"


//login user

function Login() {
/************** */

const [email, setEmail] = useState()
const [password, setPassword] = useState()

/************** */
 
/*********** */
const API_URL = "http://localhost:3000/api/auth/login";


const handleSubmit =  (e) => {
  
  e.preventDefault();
  alert(email);
  alert(password);
  const data ={
    email,
    password
}

  //const axios = require('axios');

  //const res = axios.post(API_URL, ')
const res = axios.post(API_URL, 
                        data
    )
    .then((res) => {
//getting token out of response
      console.log(res.data)
      console.log(res.data.token)
    if(res.data.token) {
        localStorage.setItem('token', res.data.token)
        //alert("You are loged in:)"
        return (<Router><Route path="/dashboard" component={Dashboard} /></Router>)
        
    }else{
    alert("You are not loged in:(")}},
     (err) => {
    alert(err);
  })
}
  
return <div className="card col-12 col-lg-4 logiin-card mt-2 mx-auto">
    
          <form> <h1>Login page</h1>
                    <div className='form-group text-left'>
                        <label htmlFor="InputEmail">Email address</label>
                        <input type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter email"/>
                    </div>
            

                    <div className="form-group text-left">
                    <label htmlFor="InputPassword">Password</label>
                    <input type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    
                </form>
                Not registred yet? <Link to = "/Register">Signup</Link>
         </div>
}
export default Login