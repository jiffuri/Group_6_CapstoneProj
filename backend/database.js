const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    database : 'pastry_db',
    user : 'root',
    password : ''

});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else{
        console.log('Mysql Databas is connected');
    }
});


module.exports = connecton;