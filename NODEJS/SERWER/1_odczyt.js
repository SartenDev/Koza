var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Jak na ciebie wołają?", function(answer){
    rl.setPrompt("W czym kodujesz " + answer + "?")
    rl.prompt();
    rl.on("line",function(language){
        console.log(language)
    })
})