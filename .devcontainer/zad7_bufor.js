// obsluga bufora
var bufer = new Buffer("moj bufor");
bufer.write("jakis tekst  ");

console.log(bufer)
console.log(bufer.toString())
console.log(bufer.toJSON());
