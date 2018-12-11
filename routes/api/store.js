var express = require('express');
var router = express.Router();
// var router= require('express').Router()
var storemodel = require('../../modelo/storeModel');

router.get('/:slugStore', (req, res)=>{
    storemodel.getBySlug(req.params.slugStore, (err, rows)=>{
        if(rows.length === 0){
            res.json({error: 'el slug de la tienda no existe'})
        }else{
            res.json(rows[0]);
        }
    })
})

router.post('/', (req, res)=>{
    
    storemodel.insert(req.body, (err, result)=>{
        if(err) return res.json({error: err.message})
        storemodel.getById(result.insertId,(err, rows)=>{
            res.json(rows[0]);
        })
    })
})
module.exports = router;