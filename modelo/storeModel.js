const db = require('../db');
var geo = require('geocoder');


exports.getBySlug = (slugStore, done)=>{
    db.get().query('select * from stores where slug = ?', [slugStore], (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}
exports.getById = (idStore, done)=>{
    db.get().query('select * from stores where id = ?', [idStore], (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.insert=({name, city, country, continent, description, address, phonenumber, email, facebook, soundcloud, instagram, www, slug}, done)=>{
    console.log(address);

    // Geocoding
    // geocoder.geocode("Atlanta, GA", function ( err, data ) {
    //     console.log(data)
    //   });
      

    // var options = {
    //     provider: 'google',
    //     httpAdapter: 'https', 
    //     apiKey: 'AIzaSyBil8XETYEYAWvv9WsT4potsdyZRQnpUt0',
    //     formatter: null 
    //   };
    
    //   var geocoder = geo(options);
     
     
    // // Using callback
    // geocoder.geocode("Atlanta, GA", function(err, res) {
    //     console.log(res);
    //   });

    db.get().query('insert into stores values (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, city, country, continent, description, address, phonenumber, email, 0, 0, facebook, soundcloud, instagram, www, slug, 0], (err, res)=>{
        if(err) return done(err, null);
        done(null, res);
    })
}

exports.getAll = (done)=>{
    db.get().query('select * from stores', (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.updateByActiva = (idStore, done)=>{
    db.get().query('update stores set active=(not active) where id = ?', [idStore],  (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}