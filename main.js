"use strict";

//Declaración de variables.

const aciertos = document.getElementById("acierto");

const fallos = document.getElementById("fallo");

const codigoRgb = document.getElementById("rgb");

const cuadrados = document.querySelector(".cuadrados");

const animacion = document.getElementById("animacion");

const btnInfo = document.querySelector(".btn_info");

const mensajeContenedor = document.querySelector(".message-container");

const infoMensaje = document.querySelector(".message");

const botonDificultad = document.querySelector(".dificultad");

//Array vacío para introducir colores.
const arrayColores = [];

//Si en el localStorage la propiedad texto tiene el valor null asignado guardamos los siguientes valores y propiedades.
if (localStorage.getItem("texto") == null) {
  localStorage.setItem("dificultad", 6);
  localStorage.setItem("clicks", 1);
  localStorage.setItem("texto", "Cambiar a difícil");
  localStorage.setItem("fallos", 0);
  localStorage.setItem("aciertos", 0);
}


//Asignación del texto al botón, el contador de clicks(para determinar la dificultad) yel nivel de dificultad.
botonDificultad.textContent = localStorage.getItem("texto");
let clickCount = localStorage.getItem("clicks");
let dificultad = localStorage.getItem("dificultad");

botonDificultad.addEventListener("click", () => {
  if (clickCount % 2 == 0) {
    localStorage.setItem("dificultad", 6);
    localStorage.setItem("clicks", 1);
    localStorage.setItem("texto", "Cambiar a difícil");
    location.reload();
  } else {
    localStorage.setItem("dificultad", 9);
    localStorage.setItem("clicks", 2);
    localStorage.setItem("texto", "Cambiar a normal");
    location.reload();
  }
});

//Botón que nos muestra información adicional al clickar.
btnInfo.addEventListener("click", () => {
  if (mensajeContenedor.style.display === "none") {
    mensajeContenedor.style.display = "block";
    infoMensaje.style.display = "block";
  } else {
    mensajeContenedor.style.display = "none";
    infoMensaje.style.display = "none";
  }
});

//Mensaje de bienvenida, solo carga en la sesión actual.
if (!sessionStorage.getItem("swalShown")) {
  // Mostrar el mensaje swal.
  setTimeout(() => {
    Swal.fire({
      title:
        "Bienvenidos al desafío RGB del Equipo-A, pulse `OK` para empezar.",
      text: `En la parte superior se muestra un código RGB, debes hacer click en el
      cuadrado de la parte inferior que corresponda al código RBG mostrado.
      Deberás acertar 3 veces para ganar o fallar 3 para perder.`,
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d0/A-Team-Logo.svg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Imagen Equipo-A",
    });
    // Establecer el indicador de que el swal ya se ha mostrado.
    sessionStorage.setItem("swalShown", "true");
  }, 800);
}

//Función que saca un código rgb.
function numeroRandom() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);

  //Sacar los colores en relación a la dificultad.
  for (let i = 0; i < dificultad; i++) {
    let nuevoRojo = Math.random() * 100 + (rojo - 50);
    let nuevoVerde = Math.random() * 100 + (verde - 50);
    let nuevoAzul = Math.random() * 100 + (azul - 50);

  //Comprobamos que ningún número esté fuera de rango(0-255).
    if (nuevoRojo > 255) {
      nuevoRojo = 255;
    }
    if (nuevoRojo < 0) {
      nuevoRojo = 0;
    }
    if (nuevoVerde > 255) {
      nuevoVerde = 255;
    }
    if (nuevoVerde < 0) {
      nuevoVerde = 0;
    }
    if (nuevoAzul > 255) {
      nuevoAzul = 255;
    }
    if (nuevoAzul < 0) {
      nuevoAzul = 0;
    }
  //Evitamos números decimales.  
    let color = `rgb(${Math.round(nuevoRojo)},${Math.round(
      nuevoAzul
    )},${Math.round(nuevoVerde)})`;

    arrayColores.push(color);
    
  }
  return arrayColores;
}

//Ejecutamos la función.
numeroRandom();

//En función de la dificultad añadimos las casillas.
function crearLi() {
  for (let i = 0; i < dificultad; i++) {
    cuadrados.appendChild(document.createElement(`li`));
  }
}
crearLi();

//Guardamos en una variable el número de casillas.
const casillas = document.querySelectorAll(".cuadrados li");

//Asignamos a la variable "casillaRandom" un número aleatorio entre 0 y la dificultad.
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


//Capturas los clicks de las casillas y los guardamos en el marcador y mostramos los mensajes correspondientes.
for (let i = 0; i < casillas.length; i++) {
  if (i === casillaRandom) {
    casillas[i].addEventListener(`click`, (e) => {
      aciertos.textContent++;
      localStorage.setItem("aciertos", aciertos.textContent);
      location.reload();
    });
    let aciertosGuardados = localStorage.getItem("aciertos");
    aciertos.textContent = aciertosGuardados;

    if (aciertos.textContent === "3") {
      Swal.fire({
        title: "Has ganado!",
        text: "Felicitaciones por tu victoria!!!",
        icon: "success",
        allowOutsideClick: false,
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          location.reload();
        }
      });
    }
  } else {
    casillas[i].addEventListener(`click`, (e) => {
      fallos.textContent++;
      localStorage.setItem("fallos", fallos.textContent);
      location.reload();
    });
    let fallosGuardados = localStorage.getItem("fallos");
    fallos.textContent = fallosGuardados;

    if (fallos.textContent === "3") {
      Swal.fire({
        title: "Has perdido!",
        text: "No te rindas, vuelve a intentarlo de nuevo!!!",
        icon: "error",
        allowOutsideClick: false,
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          location.reload();
        }
      });
    }
  }
}