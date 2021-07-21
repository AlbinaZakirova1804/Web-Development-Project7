import React from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';
import axios from "axios"
const jwt = require('jsonwebtoken');
 


function ShowAll(){

    const token = localStorage.token;
    const API_URL = "http://localhost:3000/api/messages/"
    console.log("local Storage "+localStorage.token)

    axios.get(API_URL,
        {headers: { 'Authorization': `Bearer ${token }`} })
   
    .then((res)=>{
        console.log(res)
    }, (err) => {
        alert("messages error"+err);
    }
)
    




 return   <div></div>
}
export default ShowAll