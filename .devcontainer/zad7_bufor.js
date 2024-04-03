// obsluga bufora
var bufer = new Buffer(2);
bufer.write("jakis tekst  ");

console.log(bufer)
console.log(bufer.toString())
console.log(bufer.toJSON());
