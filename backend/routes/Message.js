const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const messageCtrl = require('../controllers/message');

/**************** */
/**************** */
//routes
//save new message in DB
router.post('/', auth, messageCtrl.createMessage);
//retrive the list of messages
router.get('/', auth, messageCtrl.viewAllMessages);
//retrive only one particular sauce
router.get('/:id', auth,  messageCtrl.viewMessage);
//update one
router.put('/:id', auth/*, multer*/, messageCtrl.updateMessage);
//delete one
router.delete('/:id', auth, messageCtrl.deleteMessage);



module.exports = router;