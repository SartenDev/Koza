var fs = require('fs');

// odczytywanie folderow
fs.readdir("./","utf8", function(error,listaPlikow){
    console.log(error)
    console.log(listaPlikow)
})

