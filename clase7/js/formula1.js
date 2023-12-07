// ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

/* navegación */
const pestanias = document.querySelectorAll('#pestanias a');
console.log(pestanias)
btnRedbull = pestanias[0];
btnFerrari = pestanias[1];
btnAmartin = pestanias[2];
btnMercedes = pestanias[3];

/*
 estado inicial:
 se ve 1(un) div de los 4
 - deberíamos ocultar los otros 3 -
*/
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

/* 
    al hacer click en un botón
    mostrar la escudería que corresponda
*/
btnRedbull.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';            
        }
);

btnFerrari.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnAmartin.addEventListener(
    'click',
    function()
    {
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'flex';
        mercedes.style.display = 'none';
    }
);
btnMercedes.addEventListener(
    'click',
    function()
    {
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'none';
        mercedes.style.display = 'flex';
    }
);