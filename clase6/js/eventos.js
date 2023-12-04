//ubicamos elementos dentro del DOM
const cita = document.querySelector('#cita');
const boton = document.querySelector('#boton');

// addEventListener( 'evento', acción )
boton.addEventListener(
        'click',
        function()
        {
            cita.innerText = 'hiciste click!';
        }
);
boton.addEventListener(
        'mouseover',
        function()
        {
            cita.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function()
        {
            cita.innerText = 'mouse fuera';
        }
);
