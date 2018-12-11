const db = require('../db');

exports.getById = (idUser, done)=>{
    db.get().query('select * from users where id = ?', [idUser], (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.getAll = (done)=>{
    db.get().query('select * from users', (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.insert = ({username, name, surname, mail, password, city}, done)=>{
    db.get().query('insert into users values (null, ?, ?, ?, ?, ?, ?)', [username, name, surname, mail, password, city],(err, result)=>{
        if(err) return done(err, null);
        done(null, result);
    })
}