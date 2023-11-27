const cita = document.querySelector('#cita');

// valor inicial
let numero = 0;
let intervalo = '';

//declaramos funcions de control
function timer()
{
    numero++;
    cita.innerText = numero;
}

//invocamos la función timer()
// timer();
// actualizamos el llamado a la función
// setInterval( timer, 1 );

function iniciar()
{
    intervalo = setInterval( timer );
}
function detener()
{
    clearInterval( intervalo );
}