const { OPEN_CREATE } = require('sqlite3');

var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "development.sqlite3" 

// open the database


let db = new sqlite3.Database(DBSOURCE,(err)=>{
    if (err){
        return console.error(err.message);
    }else{
    console.log('Connected to the Database!');

    db.run(`CREATE TABLE api_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        password VARCHAR(128)  NOT NULL,
        is_superuser BOOLEAN NOT NULL DEFAULT 0,
        username VARCHAR(150) NOT NULL, 
        is_staff BOOLEAN NOT NULL DEFAULT 0,
        is_active BOOLEAN NOT NULL DEFAULT 1,
        location VARCHAR(50) NOT NULL,
        phone VARCHAR(10) NOT NULL,
        role VARCHAR(32) NOT NULL,
        email VARCHAR(254) NOT NULL 
        )`,(err) => {
            if (err) {
                console.log('Table already created!')
             }
            })
    db.run(`CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        itemdesc   VARCHAR,
        status     VARCHAR,
        helper_id  INTEGER,
        reacher_id INTEGER
        )`,(err) => {
    if (err) {
        console.log('Table already created!')
     }

    })
}

});

 module.exports = db;