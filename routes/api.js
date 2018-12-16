var express = require('express');
var router = express.Router();

const continentRouter = require('./api/continent');
const storeRouter = require('./api/store');
const userRouter = require('./api/user');
const commentRouter = require('./api/comments');
const soundRouter = require('./api/sound');


router.use('/continent', continentRouter);
router.use('/store', storeRouter);
router.use('/user', userRouter);
router.use('/comments', commentRouter);
router.use('/sound', soundRouter);



module.exports = router;