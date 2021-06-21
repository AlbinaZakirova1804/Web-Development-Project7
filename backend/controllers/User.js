//const User = require('../models/user');
var bcrypt = require('bcrypt');//for password
const jwt = require('jsonwebtoken');
const pool = require('../config/db.config').pool;

exports.signup = (req, res, next) => {
  //user input
  console.log(req.body);
  //encripting password
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
    console.log("About to create a new user! blabla")
  //create new user
  const newUser = {
    email: req.body.email,
    password: hash
  }
  //user info we got after encripting password
  console.log(newUser); //check the password encription

  //inserting a user
  pool.connect((error, client, done) => {
    console.log('client ->'+client);
    const query = 'INSERT INTO Users(email, password) VALUES($1, $2) REtURNING*';
    const values = [newUser.email, newUser.password];
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({error});
      }
      res.status(202).send({
        status: 'Successful',
        result: result.rows[0],
      });

    });
   // pool.end();
  });
});
};
    
  

exports.login = (req, res, next) => {

  const logUser = {
    email: req.body.email,
    password: req.body.password
  }

  pool.connect((error, client, done) => {
    console.log('client ->'+client);
      const query = 'SELECT * FROM Users WHERE email = $1';
      const values = [logUser.email];
      
  

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        return res.status(401).json({
        error: new Error('User not found!')
      });
      } else {
        console.log(logUser);
        bcrypt.compare(logUser.password, result.rows[0].password)
        .then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: logUser._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });

            res.status(200).json({
              userId: logUser._id,
              token: token
            });
            console.log(logUser, logUser._id);
          }).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          });
      }
    })
   // pool.end();
});
}

//exports.delete = (req, res, next)
