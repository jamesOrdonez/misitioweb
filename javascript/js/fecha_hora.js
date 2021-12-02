"use strict"

/* Imprimir fecha y hora del navegador */

var currenTime = new Date(); /*new crea objetos */
console.log(currenTime);

/* Desglosando fechas y horas */

var anyo = currenTime.getFullYear();
console.log("Año actual: " + anyo);

var mes = currenTime.getMonth();
var mesVarchar = ["Enero", "Febrero", "Marzo", "abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes actual: " + mesVarchar[mes]);

var fecha = currenTime.getDate();
console.log("Fecha: " + fecha);

var dia = currenTime.getDay();
var diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado",];
console.log("Dia de la semana: " + diaSemana [dia]);

var hora = currenTime.getHours();
console.log("Hora: " + hora);

var minutos = currenTime.getMinutes();
console.log("Minutos: " + minutos);

var segundos = currenTime.getSeconds();
console.log("Segundos: " + segundos);

var milisegundos = currenTime.getMilliseconds();
console.log("Milisegundos: " + milisegundos);

var Milisegundos1970 = currenTime.getTime();
console.log("Milisegundos transcurridos desde 1970: " + Milisegundos1970);

/* Imprimir fecha: 2 de diciembre de año 2021 */

console.log("Fecha: "+ diaSemana[dia] + " " + fecha + " " + "de" + " " + mesVarchar[mes] + " del" + " " + anyo + ".");

var fechaFutura = new Date ("January 1, 2022");/* Ingresando fechas al sistema */

/* Obtener los milisegundos transcurridos hasta el dia de hoy */

var msTime = currenTime.getTime();
var msFechaFactura = fechaFutura.getTime();
console.log(msTime, msFechaFactura);
var difMsFechaFutura = (msFechaFactura - msTime);
console.log(difMsFechaFutura);



