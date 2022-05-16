"use strict"

function guardarInfo() {
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == ""){
        alert('Por favor, iingrese el número de documento.');
        return false;
    }
    if (document.getElementById("nombreUsuario").value =="") {
        alert("Por favor, ingrese el nombre de usuario");
        return false;
    }
    if(document.getElementById('direccionUsuario').value == "") {
        alert('Por favor, ingrese la ubicación del usuario.');
        return false;
    }
    alert('Informació guardada con éxito');
    limpiarFormulario();
    return true;

}
function limpiarFormulario() {
    document.getElementById('numeroDocumento').value = "";
    document.getElementById('nombreUsuario').value = "";
    document.getElementById('direccionUsuario').value = "";
}
