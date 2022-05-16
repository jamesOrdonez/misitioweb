"use strict"

function pruebaSuma() {
    let cantidadSuperbike = document.getElementById("cantidadSuperbike").innerHTML;
    if (cantidadSuperbike < 10) { 
    cantidadSuperbike = Number(cantidadSuperbike) + 1;
    document.getElementById("cantidadSuperbike").innerHTML = cantidadSuperbike;
}}

function pruebaResta() {
    let cantidadSuperbike = document.getElementById("cantidadSuperbike").innerHTML;
    if (cantidadSuperbike > 0) { 
    cantidadSuperbike = Number(cantidadSuperbike) - 1;
    document.getElementById("cantidadSuperbike").innerHTML = cantidadSuperbike;
}}