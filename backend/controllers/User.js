//const User = require('../models/user');
var bcrypt = require('bcrypt');//for password
const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        console.log("About to create a new user! blabla")

        let user = User.create(
          Object.assign(req.body, { password: hash,
            email: req.body.email })
        );

        //const user = User.create({
        //  email: req.body.email,
        //  password: hash
       // });
        user.save().then(
          () => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    );
  };

  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }

        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
           
            const token = jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });


            res.status(200).json({
              userId: user._id,
              token: token
            });
            
          }
          
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }
