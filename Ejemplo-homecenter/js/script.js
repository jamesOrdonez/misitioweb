"use strict"

let macerati = document.getElementById("macerati");
let macerati2 = document.getElementById("macerati2");

macerati.addEventListener("click",()=>{
   macerati.classList.remove("div-macerati");
   macerati.classList.add("div-macerati-hidden");
   macerati2.classList.remove("div-macerati2");
   macerati2.classList.add("macerati2-cambio");
});

macerati2.addEventListener("click",()=>{
  macerati2.classList.remove("macerati2-cambio");
  macerati2.classList.add("div-macerati2"); 
  macerati.classList.remove("div-macerati-hidden");
  macerati.classList.add("div-macerati");
});

