"use strict"

let vuelo =[{ 
			"horaSalida":"10:30",
			"horaLlegada":"11:50",
			"duracion":"1h 20Min",
  			"origen":"BGT",
  			"destino":"CTG",
  			"precio": 375000},
  			{ 
			"horaSalida":"9:00",
			"horaLlegada":"11:10",
			"duracion":"2h 10Min",
  			"origen":"BGT",
  			"destino":"CTG",
  			"precio": 310000}];

 for (let i=0; i < vuelo.length; i++){
 	cargarVuelos(vuelo[i].horaSalida, vuelo[i].horaLlegada, vuelo[i].duracion, vuelo[i].origen, vuelo[i].destino, vuelo[i].precio);
 }

function cargarVuelos(horaSalida, horaLlegada, duracion, origen, destino, precio){
	let contentVuelo = document.createElement("div");
	let contenidoPrincipal = document.getElementById(contentVuelo);
	contenidoPrincipal.appendChild(contentVuelo);
	contentVuelo.setAttribute("class","contenido");
}

 window.onload=function(){
 	cargarVuelos();
 }
