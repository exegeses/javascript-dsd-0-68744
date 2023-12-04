// ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/*
    genear un número aleatorio 
    entre el 1 y el 6 SIN DECIMALES

    insertar dentro del contenedor #caja
    una imagen con la cara del dado ( random )

    reproducir audioo
*/

function randomNum()
{
    let numeroRandom = Math.random();
    // un número aleatorioa entre 0~1 (con decimales)
    console.log( 'numeroRandom: ', numeroRandom );

    let numeroPor5 = numeroRandom * 5;
    // al multiplicar por 5 
    //obtenemos la posibilidad de una número entre 0~5
    console.log( 'numeroPor5: ', numeroPor5 );

    let numero = Math.round( numeroPor5 );
    console.log( 'numero: ', numero );

    //le sumamos 1 y retornamos el número
    return numero + 1;
}
/* Math.round( Math.random() *5 +1 ) */
function mostrarImagen( numero )
{
    //caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
    caja.innerHTML = `<img src="red/dice-${numero}.png">`;
}

function playAudio()
{
    let sonido = new Audio('audio/dice.mp3');
    sonido.play();
}

/*function roll()
{
    let numero = randomNum();
    mostrarImagen( numero );
    playAudio()
}*/
boton.addEventListener(
        'click',
        function()
        {
            let numero = randomNum();
            mostrarImagen( numero );
            playAudio()
        }
);