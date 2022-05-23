"use strict"

class Automovil {
    constructor(marca, modelo, anyo){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Anyo = anyo;
    }
}

let auto = new Automovil ();
auto.Marca = "Toyota";
auto.Modelo = "Prado";
auto.Anyo = 2022;

let buscarAutos = document.getElementById("buscarAutos");

 buscarAutos.addEventListener("click", function() {
     maquetacion();
     let infoAutomovil = auto.Marca + " " + auto.Modelo + " Modelo " + auto.Anyo;
     document.getElementById("infoAuto").innerHTML = infoAutomovil;
 });

 function maquetacion() {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("I do'nt speaking spanish");
    marca.appendChild(textoMarca);
    marca.setAttribute("class", "style_marca");
    mainContent.appendChild(marca);
    let imagenAuto = document.createElement("img");
    imagenAuto.setAttribute("src", /* ruta */);
    mainContent.appendChild(imagenAuto);
 }
