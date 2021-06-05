const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const messageCtrl = require('../controllers/message');

/**************** */
/**************** */
//routes
//save new sauce in DB
router.post('/', auth, messageCtrl.createMessage);

module.exports = router;