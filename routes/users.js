var express = require('express');
var router = express.Router();
var userModel= require('../modelo/regUser');

router.get('/', (req, res) =>{
    userModel.getAll((err, rows)=>{
        if(err) return res.json({error:err.message});
        res.render('users', {usersList:rows})
    })
       
})

module.exports = router









// var express = require('express');
// var router = express.Router();
// var userModel= require('../modelo/regUser');

// router.get('/:idUser', (req, res, next)=> {
//     userModel.getById(req.params.idUser, (err, rows)=>{
//       if(err) return res.json({error:err.message});
//       res.json(rows);
//     })
//   })

//   router.get('/', (req, res)=>{
//       userModel.getAll((err, rows)=>{
//         if(err) return res.json({error:err.message});
//         res.json(rows);
//       })
//   })

// module.exports = router;