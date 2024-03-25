var fs = require('fs');

// zmiana nazwy pliku
fs.rename("./test.txt","./piwo.html", function(error){
    console.log(error)
})

