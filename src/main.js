/* eslint-disable */
import "bootstrap";
import "./style.css";

//*window.onload = function() {};

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const palos = ["\u2665", "\u2666", "\u2663", "\u2660"];
//random del nuemro;
const randomn = Math.floor(Math.random() * values.length);
//random del palo;
let randomp = Math.floor(Math.random() * palos.length);
let pp = palos[randomp];
console.log(pp);
document.querySelector(".numero").innerHTML = values[randomn];
document.querySelector(".palo-arriba").innerHTML = palos[randomp];
document.querySelector(".palo-abajo").innerHTML = palos[randomp];
document.querySelector(".palo-abajo").style.color = colores(pp);
document.querySelector(".palo-arriba").style.color = colores(pp);
document.querySelector(".numero").style.color = colores(pp);

function colores(palo) {
  if (pp == "\u2665" || pp == "\u2666") {
    return "red";
  } else {
    return "black";
  }
}
