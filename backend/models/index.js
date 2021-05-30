
/*const pool = require('../config/db.config.js');
const dbConfig = require('../config/db.config.js');


const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL
      )`;
  const messageTable = `CREATE TABLE IF NOT EXISTS
      messages(
        id SEREAL PRIMARY KEY,
        body VARCHAR(128) NOT NULL,
        userId INT FOREIGN KEY,
        parent_messageId  INT FOREIGN KEY
      )`
      };
      pool.connect(dbConfig).then(pool => {
        return pool.request().query(userTable, messageTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
});


pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});*/


//export pool and createTables to be accessible  from an where within the application
//module.exports = {
 // createTables,
 // pool,
//};

require('make-runnable');

/*const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./user.js")/*(db.connection, db.Sequelize)*/;
//console.log("db users", db.Users);
//db.Messages = require('./message.js')//(db.connection, db.Sequelize);
//module.exports = db;