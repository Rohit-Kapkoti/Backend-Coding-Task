const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database : 'nodesqlapi'
});

// Connect 
db.connect((err) =>{
    if(err){
        console.log("db not connected");
    }else
    console.log('mysql is conncted');
})

module.exports = db;