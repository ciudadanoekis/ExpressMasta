const db = require('../db');

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

exports.insert=({name, city, country, continent, description, address, phonenumber, email, rating, longitude, latitude, facebook, soundcloud, instagram, www, slug}, done)=>{
    db.get().query('insert into stores values (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [name, city, country, continent, description, address, phonenumber, email,rating, longitude, latitude, facebook, soundcloud, instagram, www,slug], (err, res)=>{
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