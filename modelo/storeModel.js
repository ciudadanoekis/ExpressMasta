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

exports.insert=({name, city, country, continent, description, address, phonenumber, email, facebook, soundcloud, instagram, www, slug, longitude, latitude}, done)=>{
    console.log(address);

    db.get().query('insert into stores values (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, city, country, continent, description, address, phonenumber, email,facebook, soundcloud, instagram, www, slug, longitude, latitude, 0], (err, res)=>{
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