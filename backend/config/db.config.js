// PstgreSQL DB connection configuration
const pg = require('pg');

const config = {
  user: 'me', //this is the db user credential
  database: 'testdb',
  password: '12345',
  port: 5432,
  max: 15, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);




// function to create tables in DB
const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
      users(
        id serial PRIMARY KEY,
        email VARCHAR(128) NOT NULL UNIQUE,
        password VARCHAR(128) NOT NULL
      )`;
  const messageTable = `CREATE TABLE IF NOT EXISTS
      messages(
        id serial PRIMARY KEY,
        body TEXT NOT NULL,
        user_id INT,
        parent_id  INT DEFAULT NULL,
          CONSTRAINT fk_users
          FOREIGN KEY(user_id) 
          REFERENCES users(id),
            CONSTRAINT fk_messages
            FOREIGN KEY(parent_id)
            REFERENCES messages(id) ON DELETE CASCADE
      )`;
      

  pool.on("connect", () => {
        console.log('connected to DB');
      });

  pool.query(userTable/*, messageTable*/)
    .then((res) => {
      console.log('res',res);
      pool.end();
    })
    .catch((err) => {
      console.log('err',err);
      pool.end();
    });

  pool.query(messageTable)
  .then((res) => {
    console.log('res',res);
    pool.end();
  })
  .catch((err) => {
    console.log('err',err);
    pool.end();
  });

  pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
  });

};

/*pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});*/

//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');