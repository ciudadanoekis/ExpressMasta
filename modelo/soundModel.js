const db = require('../db');

exports.getMusic = (done)=>{
    db.get().query('select track from Soundtrack order by rand() limit 1', (err, result)=>{
        if(err) return done(err, null);
        done(null, result);
    })
}