//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

// declaración de funciones
function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(120, 50%, 60%)';
    caja.innerText = 'Verde';
}
function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(32, 50%, 60%)';
    caja.innerText = 'Naranja';
}
function pintarCeleste()
{
    caja.style.backgroundColor = 'hsl(170, 50%, 60%)';
    caja.innerText = 'Celeste';
}