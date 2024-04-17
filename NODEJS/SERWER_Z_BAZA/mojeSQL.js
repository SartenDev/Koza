var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "mariadb",
    password: "mariadb",
    database: "mariadb"
})

//console.log(connection)
connection.query("INSERT INTO users VALUES('Michal','Chebes');", function(err,rows){
    if(console.log(err)){
        console.log(err)
    }
    else{
        console.log(rows)
    }
})
connection.query("SELECT * FROM users", function(err,rows){
    if(console.log(err)){
        console.log(err)
    }
    else{
        console.log(rows)
    }
})