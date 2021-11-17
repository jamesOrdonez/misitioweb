"use strict"

/* Identificacion de un producto  y costoso*/
console.log("identificacion de producto mas costoso y más económico");
console.log("");
var producto1 = 2000;
var producto2 = 6700;
var producto3 = 3000;
var producto4 = 1300;



if (producto1 > producto2 > producto3 > producto4) {
    console.log("El producto más caro es: " + producto1);
}
else if (producto2 > producto3 > producto4 > producto1) {
    console.log("El producto más caro es: " + producto2);
}

else if (producto3 > producto4 > producto1 > producto2){
    console.log("El producto más caro es: " + producto3);
}
else if (producto4 > producto1 > producto2 > producto3){
    console.log("El producto más caro es: "+ producto4);
}

/*USUARIO Y CONTRASEÑA*/

console.log("LOGIN Y PASSWORD");

var usuario = "true";
var contraseña = "true";

if (usuario === true && contraseña === true ) {
    console.log("Bienvenido");
}
else if(usuario === true && contraseña === false){
    console.log("Error, contraseña incorrecta.");
}
else if (usuario === false && contraseña === true){
    console.log("Error, usuario incorrecto.");
}
else {
    console.log("Error, usuario y contraseña incorrectos.");
}
console.log("");

/* SISTEMA DE DESCUENTOS*/

console.log("SISTEMA DE DESCUENTOS");
console.log("");

var compra1 = 200000;
var compra2 = 100000;
var compra3 = 300000;
var compra4 = 80000;
var descuento1 = 3000;
var descuento2 = 10000;
var descuento3 = 24000;

/*compra 1*/

console.log("Compra 1"); 
if (compra1 >= 100000 && compra1 < 200000){
    console.log("El valor total de su compra es: $" + compra1);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor de su compra con descuento es: $" + (compra1 - descuento1));
}
else if (compra1 >= 200000 && compra1 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra1);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor de su compra con descuento es: $" + (compra1 - descuento2));
}
else if (compra1 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra1);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor de su compra con descuento es: $" + (compra1 - descuento3));
}
else {
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra1);
}
console.log("");

/*compra 2*/

console.log("Compra 2")
if(compra2 >= 100000 && compra2 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("EL valor descontado es: $" + descuento1);
    console.log("El valor de su compra con descuento es: $" + (compra2 - descuento1));
}
else if (compra2 >= 200000 && compra2 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor de su compra con descuento es: $" + (compra2 - descuento2));
}
else if (compra2 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra2);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor de su compra con descuento es: $" + (compra2 - descuento3));
}
else {
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra2);
}
console.log("");

/*compra 3*/

console.log("Compra 3");
if (compra3 >= 100000 && compra3 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor de su compra con descuento es: $" + (compra3 - descuento1));
}
else if (compra3 >= 200000 && compra3 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor de su compra con descuento es: $" + (compra3 - descuento2));
}
else if (compra3 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra3);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor de su compra con descuento es: $" + (compra3 - descuento3));
}
else {
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra3);
}
console.log("");

/*compra 4*/

console.log("Compra 4");
if (compra4 >= 100000 && compra4 < 200000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento1);
    console.log("El valor de su compra con descuento es: $" + (compra4 - descuento1));
}
else if (compra4 >= 200000 && compra4 < 300000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento2);
    console.log("El valor de su compra con descuento es: $" + (compra4 - descuento2));
}
else if (compra4 >= 300000){
    console.log("El valor de su compra sin descuento es: $" + compra4);
    console.log("El valor descontado es: $" + descuento3);
    console.log("El valor de su compra con descuento es: $" + (compra4 - descuento3));
}
else {
    console.log("El monto no alcanza para realizar el descuento");
    console.log("El valor total de su compra es: $" + compra4);
  
}