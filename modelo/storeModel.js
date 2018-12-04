const db = require('../db');

exports.getBySlug = (idStore, done)=>{
    db.get().query('select * from stores where slug = ?', [idStore], (err, rows)=>{
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