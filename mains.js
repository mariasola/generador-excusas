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
  "estropajo",
  "elfo doméstico",
  "gamusino"
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
  "cantado",
  "saltado",
  "escalado",
  "volado"
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
  "el enchufe",
  "la varita",
  "sus sentimientos",
  "a un dinosaurio",
  "un calcetín"
];

const whoDidWhat = a => a[Math.round(Math.random() * (a.length - 1))];

function getExcuse() {
  const who = whoDidWhat(subject);
  const did = whoDidWhat(verb);
  const what = whoDidWhat(attribute);
  generator.classList.add("show_generator");
  document.getElementById("generator").innerHTML =
    "<div>Mi " + who + " ha " + did + " " + what + ".</div>";
}
btn.addEventListener("click", getExcuse);
