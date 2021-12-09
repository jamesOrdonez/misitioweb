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

/* Determinar si ya vencio el plazo */

var fechaHoraLimite = new Date(Date.UTC(2021, 11, 9, 8, 45));
fechaHoraLimite.setHours(8);
console.log("fecha y hora de vencimiento: " + fechaHoraLimite);

if (anyo <= fechaHoraLimite.getFullYear() &&
    mes <= fechaHoraLimite.getMonth() &&
    dia <= fechaHoraLimite.getUTCDate() &&
    hora <= fechaHoraLimite.getHours() &&
    minutos <= fechaHoraLimite.getMinutes()) {
        console.log("Falta: " + (fecha - fechaHoraLimite.getDate()) + " dias, " + (hora - fechaHoraLimite.getHours()) + " horas, " + (fechaHoraLimite.getMinutes() - minutos) + " minutos.");
        console.log("El envío fue realizado con éxito.");
    }
    else {
        console.log("Lo sentimos. La fecha de envío ya pasó.");
    }




