var express = require('express');
var router = express.Router();

const apiUserRouter = require('./api/user');

router.use('/user', apiUserRouter);


module.exports = router;
