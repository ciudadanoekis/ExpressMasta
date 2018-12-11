var express = require('express');
var router = express.Router();
var storeModel= require('../modelo/storeModel');

router.get('/', (req, res) =>{
    storeModel.getAll((err, rows)=>{
        if(err) return res.json({error:err.message});
        res.render('stores', {storesList:rows})
    })
})

router.get('/active/:id', (req, res)=>{
    storeModel.updateByActiva(req.params.id, (err, rows)=>{
        if(err) return res.json({error:err.message});
        res.redirect('/stores')
    })
})


module.exports = router;