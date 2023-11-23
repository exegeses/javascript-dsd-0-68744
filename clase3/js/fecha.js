//ubicamos elemento dentro del DOM
const texto = document.querySelector('#texto');
/* 
    mostrar la fecha
    formato:  23/11/2023
*/
// creamos un objeto de fecha
const fecha = new Date();
console.log('fecha: ', fecha);

// obtenemos el número de día de mes
let diaMes = fecha.getDate();
console.log('dia de mes: ', diaMes);

// obtenemos número de mes actual
let mes = fecha.getMonth() + 1;
console.log('número de mes: ', mes);

// obtenemos número de año actual
let anio = fecha.getFullYear();
console.log('número añio: ', anio);

// imprimimos dentro del span usando concatenación
//texto.innerText = diaMes +'/'+ mes +'/'+ anio;

// imprimimos dentro del span usando interpolación
texto.innerText = `${diaMes}/${mes}/${anio}`;