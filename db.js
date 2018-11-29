const mysql = require('mysql');
let pool = null;

exports.connect = (done) => {
    pool = mysql.createPool({
        host: 'eu-cdbr-west-02.cleardb.net',
        user: 'b1ad0d3f330b7e',
        password: '01dc327c',
        database: 'heroku_6b134e0e1695e3d',
        port: 3306
    })
    if(pool!=null){
        done(null);
    }else{
        done('no se ha podido realizar la connexion')
    }
}
exports.get = () => {
    return pool;
}