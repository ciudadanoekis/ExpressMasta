var express = require('express');
var router = express.Router();
var continentModel= require('../../modelo/continentModelo');


router.get('/:continent',(req, res)=>{
    continentModel.getContinent(req.params.continent ,(err, rows)=>{
        if(err) return res.json({error:err.message});
        res.json(rows);
    })
})

module.exports = router;            