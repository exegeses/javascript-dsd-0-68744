//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');

//declaramos funciones de control
function cuentaRegresiva()
{
    const actual = new Date();
    const final = new Date( 2024, 0, 1 );

    //calculamos diferencial de eventos
        // expresada en milisegundos
    let diferencia = final - actual;
    console.log( 'diferencia: ', diferencia );

    /* convertimos unidazdes de tiempo */
    //obtenemos el tiempo expresado en segundos
        // y quitamos los decimales
    let segundos = Math.trunc( diferencia/1000 );
    console.log('segundos: ', segundos);

    let minutos = Math.trunc( segundos/60 );
    console.log('minutos: ', minutos);

    let horas = Math.trunc( minutos/60 );
    console.log('horas: ', horas);

    let dias = Math.trunc( horas/24 );
    console.log('dias: ', dias);

}

//invocamos la función
cuentaRegresiva();