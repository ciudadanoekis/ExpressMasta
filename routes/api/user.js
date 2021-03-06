var express = require('express');
var router = express.Router();

var regUsermodel = require('../../modelo/regUser');



router.post('/', (req, res)=>{
    regUsermodel.insert(req.body, (err, result)=>{
        if(err) return res.json({error: err.message})
        regUsermodel.getById(result.insertId,(err, rows)=>{
            res.json(rows[0]);
        })
    })
})

router.get('/', (req, res) =>{
    regUsermodel.getAll((err, rows)=>{
        if(err) return res.json({error:err.message});
        res.json(rows);
    })
       
})



module.exports = router;