"use strict"

/* LET: SE UTILIZA PARA DECLARAR VARIABLES DE MANERA LOCAL DENTRO DE UNA FUNCION */

/* variable local */
function asignarEdad() {
    let edad = 5 + 3;
    console.log(edad);
}
asignarEdad();

/* Variable global */
var nombre = "Santiago";
function mostrarNombre() {
    console.log("Nombre: " + nombre);
}
mostrarNombre();
