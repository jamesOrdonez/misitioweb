function mostrarmensaje(){
    alert('Ya viste la película King Richard?');
}
function intercambiarImagen (ruta) {
    document.getElementById("imgPrincipal").src = ruta;
}
function textov(texto) {
    document.getElementById("textoPrincipal").textContent = texto;
}
function bodyi(contenido){
    document.getElementById("cuerpoP").textContent = contenido;
}