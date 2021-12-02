"use strict"

/* Redondear de forma automatica con el metodo round */

console.log("REDONDEAR NUMEROS DE FORMA AUTOMATICA CON EL METODO ROUND");
console.log("");
var number1 = 4.4;/* Redondea hacia abajo */
var number2 = 4.6;/* Redondea hacia arriba */
var number3 = 4.5;/* Redondea hacia arriba */
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log("Variable 1: " + number1Round + "\n" +
            "Variable 2: " + number2Round + "\n" +
            "Variable 3: " + number3Round);
console.log("");

/* Redondear hacia el piso con el metodo floor */

console.log("REDONDEAR CON EL METODO FLOOR");

var number4 = 4.9;
var number4Floor = Math.floor(number4);
console.log("Variable 4: " + number4Floor);
console.log("");

/* Redondear hacia el techo con el metodo ceil */

console.log("REDONDEAR HACIA EL TECHO CON EL METODO CEIL");

var number5 = 5.2;
var number5Ceil = Math.ceil(number5);
console.log("Variable 5 : " + number5Ceil);