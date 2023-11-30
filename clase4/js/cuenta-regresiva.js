//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');

let intervalo = '';

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

    /* calculamos los tiempos restantes */
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    /* detener cuando todo llegue a 0 */
    if(
        dias <= 0 &&
        horas <= 0 &&
        minutos <= 0 &&
        segundos <= 0
      ){
        h1.innerText = '¡Felíz Año Nuevo!'
        clearInterval( intervalo );
    }

    /* agregamos 0 inicial para dos dígitos */
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }

    /* imprimimos en los span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos la función
cuentaRegresiva();

//actualizamos el llamado a la función
intervalo = setInterval( cuentaRegresiva, 1000 );