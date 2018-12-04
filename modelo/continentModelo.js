const db = require('../db');

exports.getContinent = (continent, done)=>{
    db.get().query(`select * from stores where continent= "${continent}"`, (err, rows)=>{
        if(err) return done(err, null);
        done(null ,rows);
    })
 }
 