var fs = require('fs');

// tworzenie katalogu
fs.rmdir("./przyklady", function(error){
    console.log(error)
})

