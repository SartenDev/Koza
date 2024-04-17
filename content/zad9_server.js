var http = require('http');
//pobiera z google
http.get("http://www.google.pl", function(odpowiedzSerwera){
    odpowiedzSerwera.on('data',function(data1){
        console.log(data1.toString())
    })
})

//console.log('Serwer uruchomiony..')