"use strict";


const aciertos = document.getElementById("acierto");

const fallos = document.getElementById("fallo");

const codigoRgb = document.getElementById("rgb");

const casillas = document.querySelectorAll(".cuadrados li");

const proba = document.getElementById("proba");

const proba1 = document.getElementById("proba1");

const animacion = document.getElementById("animacion");


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

    }
  }
}

asignarColores();
aciertos.textContent === '0';
//Añadimos


console.log(aciertos.textContent)

for (let i = 0; i < casillas.length; i++) {
  if (i === casillaRandom) {
    casillas[i].addEventListener(`click`, (e) => {
      aciertos.textContent++;
      localStorage.setItem("aciertos", aciertos.textContent);
      location.reload();      
    });
    let aciertosGuardados = localStorage.getItem("aciertos");
    aciertos.textContent = aciertosGuardados;
    if(aciertos.textContent === "1" || aciertos.textContent === "2" || aciertos.textContent === "3"){
      proba.style.display = "none"
    }
    
    if(aciertos.textContent === '3'){
      localStorage.clear();
      location.reload();
      alert("Has ganado")
    }
    
  } 
  else {
    casillas[i].addEventListener(`click`, (e) => {
      fallos.textContent++;
      localStorage.setItem("fallos", fallos.textContent);
      location.reload();
    });
    let fallosGuardados = localStorage.getItem("fallos");
      fallos.textContent = fallosGuardados;

      if(fallos.textContent === "1" || fallos.textContent === "2" || fallos.textContent === "3"){
        proba1.style.display = "none"
      }

    if(fallos.textContent === '3'){
      localStorage.clear();
      location.reload();
        alert("Has perdido.")

    }
  }
}


