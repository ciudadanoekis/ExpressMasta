var express = require('express');
var router = express.Router();
var commentModel= require('../../modelo/commentModel');

router.post('/', (req, res)=>{
    console.log(req.body)
    // res.send('HOLA MUNDO')
    commentModel.insert(req.body, (err, result)=>{
        if(err) return res.json({error: err.message})
        commentModel.getCommentsByStore(req.params.slug, (err, rows)=>{
            res.json(rows);
            
        })

    })
})

router.get('/', (req, res)=>{
    commentModel.getAll((err, rows)=>{
        if(err) return res.json({error: err.message});
        res.json(rows);
    })
})
router.get('/:slug', (req, res)=>{
    commentModel.getCommentsByStore(req.params.slug, (err, rows)=>{
        if(err) return res.json({error: err.message})
        res.json(rows);
    })
})

module.exports = router;            