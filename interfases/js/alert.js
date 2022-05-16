function validarInfo(campo) {
    let text1 = document.getElementById("Nombre");
    let text2 = document.getElementById("Apellido");
    let text3 = document.getElementById("numeroDocumento");
    if(text1.value === "" || text2.value === "" || text3.value === ""){
       alert("completa todos los campos");
    }
}
