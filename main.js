"use strict";

const aciertos = document.getElementById("acierto");

const fallos = document.getElementById("fallo");

const codigoRgb = document.getElementById("rgb");

const casillas = document.querySelectorAll(".cuadrados li");

const arrayColores = [];

//funcion que saca un código rgb

function numeroRandom() {
  const num1 = Math.floor(Math.random() * 256);

  const num2 = Math.floor(Math.random() * 256);

  const num3 = Math.floor(Math.random() * 256);

  arrayColores.push(`rgb(${num1 - 50},${num2},${num3})`);

  arrayColores.push(`rgb(${num1 + 50},${num2},${num3})`);

  arrayColores.push(`rgb(${num1},${num2 - 50},${num3})`);

  arrayColores.push(`rgb(${num1},${num2 + 50},${num3})`);

  arrayColores.push(`rgb(${num1},${num2},${num3 - 50})`);

  arrayColores.push(`rgb(${num1},${num2},${num3 + 50})`);

  arrayColores.push(`rgb(${num1},${num2},${num3})`);

  arrayColores.push(`rgb(${num1 - 50},${num2 + 50},${num3})`);

  arrayColores.push(`rgb(${num1},${num2 - 50},${num3 + 50})`);

  return arrayColores;
}

numeroRandom();

const casillaRandom = Math.floor(Math.random() * casillas.length);

//Asignamos codigo y color RGB al apartado RGB.

const colorRgb = (codigoRgb.textContent = arrayColores[casillaRandom]);

codigoRgb.style.backgroundColor = arrayColores[casillaRandom];

function asignarColores() {
  for (let i = 0; i < casillas.length; i++) {
    if (i === casillaRandom) {
      casillas[i].style.backgroundColor = arrayColores[i];
    } else {
      casillas[i].style.backgroundColor = arrayColores[i];

      console.log(casillas[i].style.backgroundColor);
    }
  }
}

asignarColores();

//Añadimos

for (let i = 0; i < casillas.length; i++) {
  if (i === casillaRandom) {
    casillas[i].addEventListener(`click`, (e) => {
      aciertos.textContent++;
      asignarColores();
    });
  } else {
    casillas[i].addEventListener(`click`, (e) => {
      fallos.textContent++;
      asignarColores();
    });
  }
}
