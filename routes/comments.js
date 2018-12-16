var express = require('express');
var router = express.Router();

var commentmodel = require('../modelo/commentModel');



// router.post('/', (req, res)=>{
//     commentmodel.insert(req.body, (err, result)=>{
//         if(err) return res.json({error: err.message})
//         commentmodel.getById(result.insertId,(err, rows)=>{
//             res.json(rows[0]);
//         })
//     })
// })
router.get('/', (req, res)=>{
    commentmodel.getAll((err, rows)=>{
      if(err) return res.json({error:err.message});
      res.render('comments',{arrComments:rows});
    })
})
module.exports = router;