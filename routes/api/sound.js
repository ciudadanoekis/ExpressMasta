var express = require('express');
var router = express.Router();
const soundModel = require('../../modelo/soundModel');

router.get('/', (req, res)=>{
    soundModel.getMusic((err, result)=>{
        if(err) return res.json({error: err.message});
        res.json(result)
    })
})





module.exports = router;