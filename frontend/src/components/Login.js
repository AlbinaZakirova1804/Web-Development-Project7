import React, { useState } from "react";
import '../styles/login.css';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";


function Login(props) {
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  /**/
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setAuthTokens } = useAuth();
  /**/
  //const referer = props.location.state.referer || '/';
  /**/
  let referer;
  if(props.location.state !== undefined) {
    referer = props.location.state.referer;
  } else 
  {
    referer = "/dashboard";
  }
/***/
  const API_URL = "http://localhost:3000/api/auth/login";

  //console.log("Token =>  "+getAuthTokens.data);
//postLogin function
  const handleSubmit =  async (e) => {
    e.preventDefault();
      const data ={
        email,
        password
      }
//call to the back end
const res = await axios.post(API_URL, data)
    .then((res) => {
//respose
    if(res.status === 200) {
        setAuthTokens(res.data.token);
        setLoggedIn(true);
        //localStorage.setItem('token', res.data.token);
        //getToken(true);
        //console.log("local storage ->  "+localStorage.token)
        alert("You are loged in:)");
    }else{
      setIsError(true);//???????not defined
     alert("You are not loged in:(")
        }
    },
     (err) => {
       setIsError(true);
        alert(err);
  });
}
/*------------------------------*/
if (isLoggedIn) {
  //return <Redirect to = "/"/>
  return <Redirect to={referer}/>
}
/*------------------------------*/  
return <div className="card col-12 col-lg-4 logiin-card mt-2 mx-auto">

          <form> <h1>Login</h1>
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
                 <Link to = "/signup">Not registred yet?</Link>
                 { isError &&<span style="color:red">The email or password provided were incorrect!</span>}
         </div>
}
export default Login
