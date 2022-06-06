
class automovil{
    constructor(marca,modelo,version,year,precio,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Nissan","Skyline","R-34","2015","220600000","Bogota","img/skyline.jpg");
let car2= new automovil("Toyota","Prado","tlx","2020","220000000","Bucaramanga","img/toyota.jpg");
let car4= new automovil("Toyota","Supra","mk4","2018","128000000","Medellin","img/supra-4-ii.jpg");
let car3= new automovil("Mitsubishi ","eclipse","tunning","2017","130000000","Cali","img/eclipse.jpg");

function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contimg.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contimg.appendChild(yearcar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);
}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        cleanwindow();
        if(Busq=="nissan"){
            Busqueda(car1);       
        }
        else if(Busq=="mitsubishi"){
            Busqueda(car3);
        }
        
        else if(Busq=="toyota"){
            Busqueda(car4);
            Busqueda(car2);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}