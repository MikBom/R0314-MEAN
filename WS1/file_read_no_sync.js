var fs = require("fs");

console.log("Ohjelma alkaa..");
var data = fs.readFile('example.txt', function (data, err){
    if(err) throw err;
    console.log(data.toString());
});

for (var i=0 ; i < 15 ; i++){
    console.log("Node jatkaa toimintaansa kun tiedostoa luetaan..");
}


console.log("Ohjelma loppu vai loppuiko");