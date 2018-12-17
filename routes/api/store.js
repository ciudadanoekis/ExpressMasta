var express = require('express');
var router = express.Router();
var geo = require('node-geocoder')
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
    console.log(req.body)

     var options = {
        provider: 'google',
        httpAdapter: 'https', 
        apiKey: 'AIzaSyCKeQbO7c-6t-bDKQZorL7VAD8fdsN4xpk',
        formatter: null 
      };
    
      var geocoder = geo(options);
     
     
    // Using callback
    geocoder.geocode(req.body.address, function(err, res) {
        if(err) console.log('ERROR', err)
        console.log(res);
      });
    
   
      storemodel.insert({
          name: req.body.name,
          city: req.body.city,
          country: req.body.country,
          continent: req.body.continent,
          description: req.body.description,
          address: req.body.address,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          facebook: req.body.facebook,
          soundcloud: req.body.soundcloud,
          instagram: req.body.instagram,
          www: req.body.www,
          slug: req.body.slug,
          longitude: req.body.longitude,
          latitude: req.body.latitude
      }, (err, result) =>{
        if(err) return res.json({error: err.message})
        storemodel.getById(result.insertId,(err, rows)=>{
            res.json(rows[0]);
            })
        })
    })

module.exports = router;