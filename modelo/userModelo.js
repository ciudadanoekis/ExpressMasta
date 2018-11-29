const db = require('../db');

exports.getAll = (done)=>{
    db.get().query('select * from stores', (err, rows)=>{
        if(err) return done(err, null);
        done(null ,rows);
    })
}