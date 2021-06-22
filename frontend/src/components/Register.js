import React, {useState} from "react"
import '../styles/login.css'
import axios from "axios"
import {Link} from "react-router-dom"


//register user

function Register() {
/************** */

const [email, setEmail] = useState()
const [password, setPassword] = useState()

/************** */
 
/*********** */
const API_URL = "http://localhost:3000/api/auth/signup";


const handleSubmit =  (e) => {
  
  e.preventDefault();
  alert(email);
  alert(password);

  const axios = require('axios');
  const res = axios.post(API_URL, {email: email,
    password: password})
  .then((res) => {
    alert(res);
    alert(res.email);
  }, (err) => {
    alert(err);
  })
}
  
return <div className="card col-12 col-lg-4 logiin-card mt-2 mx-auto">
          <form><h1>Signup page</h1>
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
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                    
                </form>
                If you alredy registred <Link to="/Login">Login</Link>
         </div>
}
export default Register