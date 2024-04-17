var http = require('http');
var fs = require("fs");

http.createServer(function(req, odpowiedzSerwera){
    odpowiedzSerwera.writeHead(200,{'content-type':'text/html'});
    var header = "Witaj na stronie startowej w node js";
    var html = fs.readFileSync('./index.html','utf8');
    html = html.replace('{ Header }', header)
    odpowiedzSerwera.end(html);
}).listen(3000);

console.log('Serwer uruchomiony..')