var fs = require("fs");

console.log("Ohjelma alkaa...");
var data = fs.readFileSync('example.txt');

console.log(data.toString());
console.log("Node jatkaa kun tiedostoa luetaan...");

console.log("Ohjelma loppu!");