"use strict"

let cantidadSuperbikeGlobal = document.getElementById("cantidadSuperbike").innerHTML;

function pruebaSuma() {
    if (cantidadSuperbikeGlobal < 10) { 
    cantidadSuperbikeGlobal = Number(cantidadSuperbikeGlobal) + 1;
    document.getElementById("cantidadSuperbike").innerHTML = cantidadSuperbikeGlobal;
    modificarTotal();
    }
}

function pruebaResta() {
    cantidadSuperbikeGlobal = document.getElementById("cantidadSuperbike").innerHTML;
    if (cantidadSuperbikeGlobal > 0) { 
    cantidadSuperbikeGlobal = Number(cantidadSuperbikeGlobal) - 1;
    document.getElementById("cantidadSuperbike").innerHTML = cantidadSuperbikeGlobal;
    modificarTotal();
    }
}
function modificarTotal() {
    let cantidadSuperbike = document.getElementById("cantidadSuperbike").innerHTML;
    if (cantidadSuperbike == "1") {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadSuperbike + " producto";
    }else {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadSuperbike + " productos";
    }
    mostrarTotal();
}

function mostrarTotal(){
    let costoUnitario = document.getElementById("costoUnitario").innerHTML;
    let costoTotal = Number(costoUnitario) * Number(cantidadSuperbikeGlobal);
    document.getElementById("costoTotal").innerHTML = costoTotal;
}