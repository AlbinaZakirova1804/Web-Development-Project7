const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//import models, { sequelize } from './models';

const userRoutes = require('./routes/user');



const app = express();

//const db = require('./models')
//db.sequelize.sync();
//db connect
//


//Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


//const db = require('./models')
//db.sequelize.sync();  

//db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync db.");
//});

app.use(bodyParser.json());


app.use('/api/auth', userRoutes);


module.exports = app;