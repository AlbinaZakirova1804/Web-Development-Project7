import React from "react";
import {Card} from 'react-bootstrap';
import axios from "axios";
import { useAuth } from "../context/auth";


function Dashboard(props) {
    const { setAuthTokens } = useAuth();
 const token = localStorage.token;

function logOut() {
    setAuthTokens();
    console.log("setAuthTokens -> " + setAuthTokens);
}

const API_URL = "http://localhost:3000/api/messages/"


axios.get(API_URL,
    {headers: { 'Authorization': `Bearer ${token }`} })

.then((res)=>{
    console.log(res)
}, (err) => {
    alert("messages error"+err);
}
)

return (
    <div>
<h1>Dashboard Page</h1>
<Card body> 
card
</Card>
<button onClick={logOut}>Log out</button>
    </div>
);
}
export default Dashboard