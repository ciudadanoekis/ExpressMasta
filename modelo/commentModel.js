const db = require('../db');

exports.getAll = (done)=>{
    db.get().query('select * from comments', (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.insert = ({fk_users,fk_store, comment}, done)=>{
    db.get().query('insert into comments values (null, ?, ?, ?)', [fk_users,fk_store, comment],(err, result)=>{
        if(err) return done(err, null);
        done(null, result);
    })
}
exports.getById = (idComment, done)=>{
    db.get().query('select * from comments where id = ?', [idComment], (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}