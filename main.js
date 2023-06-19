'use strict';

const aciertos = document.getElementById('aciertos');
const fallos = document.getElementById('fallos');
const codigoRgb = document.getElementById('rgb');
const casillas = document.querySelectorAll(".cuadrados li");
const arrayColores = [];

//funcion que saca un array de colores
let numeroRandom = function () {
    const num1 = Math.floor(Math.random()*256);
    const num2 = Math.floor(Math.random()*256);
    const num3 = Math.floor(Math.random()*256);

    arrayColores.push(`rgb(${num1 -50},${num2},${num3})`);
    arrayColores.push(`rgb(${num1+50},${num2},${num3})`);
    arrayColores.push(`rgb(${num1},${num2-50},${num3})`);
    arrayColores.push(`rgb(${num1},${num2+50},${num3})`);
    arrayColores.push(`rgb(${num1},${num2},${num3-50})`);
    arrayColores.push(`rgb(${num1},${num2},${num3+50})`);
    arrayColores.push(`rgb(${num1},${num2},${num3})`);
    arrayColores.push(`rgb(${num1-50},${num2+50},${num3})`);
    arrayColores.push(`rgb(${num1},${num2-50},${num3+50})`);

};


//console.log(numeroRandom());
const casillaRandom = Math.floor(Math.random()*casillas.length);


//Asignamos codigo y color RGB al apartado RGB.

let asignarColores = function () {

for(let i = 0; i < casillas.length;i++){
    if(i === casillaRandom){
        casillas[i].style.backgroundColor = arrayColores[i];
    }else{
        casillas[i].style.backgroundColor = arrayColores[i];
        console.log(casillas[i].style.backgroundColor)
    }
};
}
numeroRandom();
const colorRgb = codigoRgb.textContent = arrayColores[casillaRandom];

codigoRgb.style.backgroundColor = arrayColores[casillaRandom];
asignarColores();

//Añadimos 
for(let i = 0; i < casillas.length;i++){
    if(i === casillaRandom){
        casillas[i].addEventListener(`click`, (e) => {
            aciertos.textContent++;
    })
    }else{
        casillas[i].addEventListener(`click`, (e) => {
            fallos.textContent++;
    })
    }
};