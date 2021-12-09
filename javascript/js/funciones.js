"use strict"

function mostrarHora() {
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    if (horaActual > 12) {
        horaActual = horaActual - 12;
    }
    if (horaActual > 10) {
        horaActual = "0" + horaActual;
    }
    if(minutosActual > 10) {
        minutosActual = "0" + minutosActual;
    }
    alert("Hora actual: " + horaActual + ":" + minutosActual);
}
mostrarHora();

function presentacion(nombre, titulado) {
    alert("Bienvenido. Nombre: " + nombre + ". Titulado: " + titulado + ".");
}

function validarDescuento(compra){
    var total = 0;
    /* Si la compra es mayor a 10.000 tiene descueneto del 10% */
    if (compra >= 10000){
        total = compra * .90;
    }
    /* Si la compra es mayor a 5000 y menos que 10000 tiene descuento del 5% */
    else if (compra >= 5000 && compra <= 9999) {
        total = compra * .95;
    }
    else {
        total = compra;
    }
    return total;
}
function calcularDescuento(compra) {
    alert("Costo total: $" + validarDescuento(compra));
}