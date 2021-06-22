
const pool = require('../config/db.config').pool;

/******CREATE********/
exports.createMessage = (req, res, next) => {
    console.log("I'm here in create sauce!");
    //const url = req.protocol + '://' + req.get('host');
    
    //console.log(message);
    
  
    pool.connect((error, client, done) => {

      const message = {
        body: req.body.body,
        user_id: req.body.user_id,
        parent_id:  req.body.parent_id};

      const query = 'INSERT INTO Messages (body, user_id, parent_id) VALUES ($1, $2, $3) RETURNING*';
      const values = [message.body, message.user_id, message.parent_id];
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
    })
  };

 /*********VIEW_ALL********/
 exports.viewAllMessages = (req, res, next) => {
  pool.connect((error, client, done) => {
    console.log("user "+req.currentUser);
    //const query = 'SELECT * FROM Messages Where user_id = $1';
    const query = 'SELECT * FROM Messages';
    //const values = [req.currentUser];//changed
    client.query(query/*, values*/, (error, result) => {
        
      done();
      if (error) {
        res.status(400).json({error});
      }
        res.status(202).send({
        status: 'Successful',
        result: result.rows,
      });
    });
  })
 };

/*********VIEW_ONE********/
exports.viewMessage = (req, res, next) => {
  pool.connect((error, client, done) => {
    const query = 'SELECT * FROM Messages Where id = $1';
    const values = [req.params.id];
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
  })
};

/**********UPDATE**********/
exports.updateMessage = (req, res, next) => {
  pool.connect((error, client, done) => {
    const query = 'UPDATE Messages SET body = $1 Where id = $2 RETURNING*';
    const values = [req.body.body, req.params.id];
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
  })
};

/*/********DELETE*********/
exports.deleteMessage = (req, res, next) => {
  console.log('We are at delete sauce!');

  pool.connect((error, client, done) => {
    const query = 'DELETE FROM Messages Where id = $1';
    const values = [req.params.id];
    client.query(query, values, (error, result) => {
        
      done();
      if (error) {
        res.status(400).json({error});
      }
        res.status(202).send({
        status: 'Successful',
        message: 'Deleted'
      });
    });
  })

};

  