"use-strict";
const btn = document.querySelector(".btn");
const generator = document.querySelector(".generator");

const subject = [
  "perro",
  "iguana",
  "chinchilla",
  "mejor amiga",
  "vecina",
  "silla",
  "ukele",
  "lavadora",
  "judia verde",
  "pez",
  "gato",
  "cacatúa",
  "hermana",
  "sofá",
  "escoba",
  "estropajo"
];
const verb = [
  "comido",
  "recilado",
  "borrado",
  "enterrado",
  "twiteado",
  "robado",
  "instagrameado",
  "perdido",
  "escrito sobre",
  "bañado",
  "escapado",
  "casado",
  "vertido",
  "roto",
  "tirado",
  "mordido",
  "cantado"
];
const attribute = [
  "el café",
  "sus ataques de ansiedad",
  "un familiar",
  "los papeles",
  "el coche",
  "la bici",
  "al miedo",
  "la puerta",
  "el váter",
  "el enchufe"
];

let who = subject[Math.round(Math.random() * (subject.length - 1))];
let did = verb[Math.round(Math.random() * (verb.length - 1))];
let what = attribute[Math.round(Math.random() * (attribute.length - 1))];

function excuse() {
  generator.classList.add("show_generator");
  document.getElementById("generator").innerHTML =
    "<div>Mi " + who + " ha " + did + " " + what + ".</div>";
}
btn.addEventListener("click", excuse);
//si algunos verbos tienen "se ha" delante y otros "ha" como distingue unos de otros?
// se puede detectar el articulo solo?
