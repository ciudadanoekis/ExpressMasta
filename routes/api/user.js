var express = require('express');
var router = express.Router();
var userModel= require('../../modelo/userModelo');


router.get('/',(req, res)=>{
    userModel.getAll((err, rows)=>{
        if(err) return res.json({error:err.message});
        res.json(rows);
    })
})

module.exports = router;
