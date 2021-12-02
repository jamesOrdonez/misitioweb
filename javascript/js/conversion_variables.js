"use strict"

/* Conversion temporal de forma implicita */

console.log("CONVERSION TEMPORAL DE FORMA IMPLICITA");
console.log("");

var num1 = "12";
var num2 = 4;

console.log("El resulatdo de la suma es: " + (num2 + num1));
console.log("El resulatdo de la resta es: " + (num2 - num1));
console.log("El resulatdo de la multiplicacion es: " + (num2 * num1));
console.log("El resulatdo de la division es: " + (num2 / num1));
console.log("");

/* Conversion explicita string a int */

console.log("CONVERSION EXPLICITA");
console.log("");

var num3 = "20";
var num4 = 2;
var num3Int = parseInt(num3);


console.log("El resultado de la suma es: " + (num3Int + num4));
console.log("");

/* Conversion explicita int a decimal */

var num5 = "12.2";
var num6 = 4.5;
console.log("El resultado de la suma es: " + (parseFloat(num5) + num6));
console.log("");

/* Conversion de int a string */

var num7 = 12;
var num8 = 10;
var num7Str = num7.toString();
var num8Str = num8.toString();

console.log("El resultado de la suma es: " + (num7Str + num8Str));
console.log("");

/* Se utiliza Number para hacer la conversion temporal de num9 a int  */
var num9 = "8";
var num10 = 3;
console.log("El resultado de la suma es: " + (Number(num9) + num10));