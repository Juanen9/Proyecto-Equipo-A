"use strict";

const aciertos = document.getElementById("acierto");

const fallos = document.getElementById("fallo");

const codigoRgb = document.getElementById("rgb");

const casillas = document.querySelectorAll(".cuadrados li");

const proba = document.getElementById("proba");

const proba1 = document.getElementById("proba1");

const animacion = document.getElementById("animacion");

const arrayColores = [];

//Solo carga en la sesión actual.
if (!sessionStorage.getItem('swalShown')) {
  // Mostrar el mensaje swal.
  setTimeout(() => {
    Swal.fire({
      title: 'HOLA!!!',
      text: 'Bienvenidos al desafio RGB del Equipo-A, pulse `OK` para empezar.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/A-Team-Logo.svg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Imagen Equipo-A',
    });
    // Establecer el indicador de que el swal ya se ha mostrado.
    sessionStorage.setItem('swalShown', 'true');
  },2000);
};

//funcion que saca un código rgb

function numeroRandom() {
  const num1 = Math.floor(Math.random() * 256);

  const num2 = Math.floor(Math.random() * 256);

  const num3 = Math.floor(Math.random() * 256);
  

  arrayColores.push(`rgb(${Math.round(num1 / 1.3)},${num2},${num3})`);

  arrayColores.push(`rgb(${Math.round(num1 / 1.3)},${num2},${num3})`);

  arrayColores.push(`rgb(${num1},${Math.abs(Math.round(num2 / 1.3))},${num3})`);

  arrayColores.push(`rgb(${num1},${Math.round(num2 / 1.3)},${num3})`);

  arrayColores.push(`rgb(${num1},${num2},${Math.round(num3 / 1.3)})`);

  arrayColores.push(`rgb(${num1},${num2},${Math.round(num3 / 1.3)})`);

  arrayColores.push(`rgb(${num1},${num2},${num3})`);

  arrayColores.push(`rgb(${Math.round(num1 / 1.3)},${Math.round(num2 / 1.3)},${num3})`);

  arrayColores.push(`rgb(${num1},${Math.round(num2 / 1.3)},${num3 + 50})`);

  return arrayColores;
}

//Ejecutamos la función.
numeroRandom();

//Asignamos a la variable "casillaRandom" un número aleatorio entre 0 y 9.
const casillaRandom = Math.floor(Math.random() * casillas.length);

//Asignamos codigo y color RGB al apartado RGB.
const colorRgb = (codigoRgb.textContent = arrayColores[casillaRandom]);
codigoRgb.style.backgroundColor = arrayColores[casillaRandom];

//Con esta función asignamos los colores a la paleta RGB y a las casillas.
function asignarColores() {
  for (let i = 0; i < casillas.length; i++) {
    if (i === casillaRandom) {
      casillas[i].style.backgroundColor = arrayColores[i];
    } else {
      casillas[i].style.backgroundColor = arrayColores[i];

    }
  }
}

//Ejecutamos la función.
asignarColores();


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
      proba.style.display = "none";
    };
    
    if(aciertos.textContent === '3'){
      Swal.fire({
        title: 'Has ganado!',
        text: 'Felicitaciones por tu victoria!!!',
        icon: 'success',
        showConfirmButton: false
      });
      setTimeout(() => {
        localStorage.clear();
        location.reload();
      },3000);
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
        proba1.style.display = "none";
      };

    if(fallos.textContent === '3'){
      Swal.fire({
        title: 'Has perdido!',
        text: 'No te rindas, vuelve a intentarlo de nuevo!!!',
        icon: 'error',
        showConfirmButton: false
      });
      setTimeout(() => {
        localStorage.clear();
        location.reload();
      },3000);
    }
  }
};




