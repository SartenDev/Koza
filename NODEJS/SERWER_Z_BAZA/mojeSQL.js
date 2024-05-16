var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    user: "mariadb",
    password: "mariadb",
    database: "mariadb"
})


var sql = "TRUNCATE TABLE users;"
connection.query(sql)

var sql = "INSERT INTO users VALUES('Szymon','Kot');"
connection.query(sql)
    
connection.query("SELECT * FROM users", function(err,rows){
    if(console.log(err)){
        console.log(err)
    }
    else{
        console.log(rows)
    }
})

// connection.end()




// var sql = "CREATE TABLE szefy IF NOT EXISTS (id int AUTO_INCREMENT PRIMARY KEY, imie VARCHAR(40), nazwisko VARCHAR(40))"
// connection.query(sql)
