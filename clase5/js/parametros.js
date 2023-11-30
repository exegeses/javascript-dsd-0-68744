// ubnicamos elemento dentro del DOOMO
const caja = document.querySelector('#caja');

/* declaración de funciones */
function saludar( nombre )
{
    console.log('hola ', nombre );
}

function pintar( codigo )
{
    caja.style.backgroundColor = codigo
}


//invicamos función saludar
saludar( 'Ed' );
saludar( 'Edd' );
saludar( 'Eddie' );