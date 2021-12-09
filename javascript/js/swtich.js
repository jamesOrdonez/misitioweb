"use strict"

var voto = "Luisa";
var candidatos = ["Luisa", "Jesus", "Yolanda", "Nulo", "En blanco"];
var votos = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < candidatos.length; i++) {
    if (voto === candidatos[i]) {
        votos[i++]; 
    }
}

console.log("Resultados");
for (let i = 0; i < candidatos.length; i++) {
    console.log(candidatos[i] + ": " + votos[i]);
}