
const pool = require('../config/db.config').pool;

/******CREATE********/
exports.createMessage = (req, res, next) => {
    console.log("We are about to create a sauce!");
    const message = {
      body: req.body.body,
      user_id: req.params.user_id,
      parent_id:  req.params.pare};
   //req.body = JSON.parse(req.body.message);//convert string into json object
  console.log(req.body);
    console.log("I'm here in create sauce!");
    const url = req.protocol + '://' + req.get('host');
    
    //console.log(message);
    
  
    pool.connect((error, client, done) => {
      
      console.log(message);

      console.log('client ->'+client);
      const query = 'INSERT INTO Messages(INSERT INTO Messages(body, user_id, parent_id) VALUES($1, $2, $3) REtURNING*';
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
    
    }).then((res) => {
      console.log('res',res);
      
    })
    .catch((err) => {
      console.log('err',err);
      
      pool.end();
    });
  };

    /*pool.connect((error, client, done) => {

        const query = 'INSERT INTO Messages(body, user_id, parent_id) VALUES($1, $2, $3) REtURNING*';
        const values = [message.body, message.user_id, message.parent_id];

        console.log('query -> '+query);

        client.query(query, values, (error, result) => {
            done();
            if (error) {
              res.status(400).json({error});
            }
            res.status(201).send({
              status: 'Successful',
              result: result.rows[0],
            });
    }).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        });
    })
    pool.end();*/

        //schema for entry
        /*const message = new Message({
            userId: req.body.sauce.userId,
            name: req.body.sauce.name,
            manufacturer: req.body.sauce.manufacturer,
            description: req.body.sauce.description,
            mainPepper: req.body.sauce.mainPepper,
            imageUrl: url + '/images/' + req.file.filename,
            heat: req.body.sauce.heat,
            likes: 0,//number 
            dislikes: 0,//number
            userLiked: [],//array
            userDisliked: []
        })

        console.log(sauce);
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Sauce saved successfullly'
            });*/
  