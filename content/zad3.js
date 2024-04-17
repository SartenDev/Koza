var fs = require('fs');

// kasowanie pliku
fs.unlink("./test.txt", function(error){
    if(error){
        console.log(error)
    }
})

