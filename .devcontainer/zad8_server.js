var http = require('http');

http.createServer(function(req, odpowiedzSerwera){
    odpowiedzSerwera.writeHead(200);
    odpowiedzSerwera.end('Witaj!');
}).listen(3000);

console.log('Serwer uruchomiony..')