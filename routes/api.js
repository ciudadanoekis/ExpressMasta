var express = require('express');
var router = express.Router();

const continentRouter = require('./api/continent');
const storeRouter = require('./api/store');
const userRouter = require('./api/user');

router.use('/continent', continentRouter);
router.use('/store', storeRouter);
router.use('/user', userRouter);


module.exports = router;