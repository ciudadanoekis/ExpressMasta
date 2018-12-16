const db = require('../db');

exports.getAll = (done)=>{
    db.get().query('select * from comments', (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}

exports.insert = ({fUser,fSlug, comment}, done)=>{
    db.get().query('INSERT INTO comments VALUES (null, ?, (SELECT id FROM stores WHERE slug=?), ?)', [fUser,fSlug, comment],(err, result)=>{
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
exports.getCommentsByStore = (fk_stores, done)=>{
    db.get().query('select c.comment, u.username, u.name, u.surname, u.mail, u.city from comments c, users u where c.fk_users=u.id and c.fk_store=(select id from stores where slug=?)', [fk_stores], (err, rows)=>{
        if(err) return done(err, null);
        done(null, rows);
    })
}
// select c.comment, u.username, u.name, u.surname, u.mail, u.city from comments c, users u where c.fk_users=u.id and c.fk_store=(select id from stores where slug='Wakanda');