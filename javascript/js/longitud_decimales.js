"use strict"

/* metodo tofixed para recortar decimales */
console.log("RECORTAR DECIMALES CON EL METODO TOFIXED");
var promedio = 2.56648226;
promedio = promedio.toFixed(2);
console.log(promedio);

console.log("");

/* Forzando el redondeo */
/* metodo slice para redondear */

console.log("FORZANDO EL REDONDEO CON METODO SLICE")
var promedio2 = 2.566448226;
var promedio2Str = promedio2.toString();
var promedio2Conv = promedio2Str.slice(0, 4);/* Solo para cadenas de texto */
var promedio2Conv = parseFloat(promedio2Conv);

console.log(promedio2Conv);
