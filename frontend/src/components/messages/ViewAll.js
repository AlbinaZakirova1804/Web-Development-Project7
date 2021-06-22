import React from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';
import axios from "axios"
const jwt = require('jsonwebtoken');
 


function ShowAll(params){
 const token = localStorage.token;

   
 
    

const API_URL = "http://localhost:3000/api/messages/"
console.log("local Storage "+localStorage.token)
useEffect(() => {

axios.get(API_URL,
    {headers: { 'Authorization': `Bearer ${token }`} })
    .then((res)=>{
        console.log(res.data)
    }, (err) => {
        alert(err);
      })
    
})  



 return   (<Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Text>
        hey
    </Card.Text>
</Card.Body>
    </Card>)
    }
export default ShowAll