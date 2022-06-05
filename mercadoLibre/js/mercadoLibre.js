
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Nissan","Skyline","R-34","2015","220600000","500.000","Bogota","img/skyline.jpg");
let car4= new automovil("Toyota","Supra","mk4","2018","128000000","220.000","Medellin","img/supra-4.jpg");
let car3= new automovil("Mitsubishi ","eclipse","tunning","2017","130000000","500.000","Cali","img/eclipse.jpg");

function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contenedorPrincipal.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contenedorPrincipal.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contenedorPrincipal.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contenedorPrincipal.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+"km");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contenedorPrincipal.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contenedorPrincipal.appendChild(city);
}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="nissan"){
            Busqueda(car1);           
        }
        else if(Busq=="toyota"){
            Busqueda(car4);
        }
        
        else if(Busq=="mitsubishi"){
            Busqueda(car3);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}