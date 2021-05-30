// PstgreSQL DB connection configuration
const { Pool } = require('pg');
DB_URL = 'postgres://me:12345@localhost:5432/testdb';
const pool = new Pool({DB_URL})


// function to create tables in DB
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
      

      pool.on("connect", () => {
        console.log('connected to DB');
      });

      pool.query(userTable, messageTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  };


pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');