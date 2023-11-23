//ubicamos elemento dentro del DOM
const cita = document.querySelector('#cita');
/*
    hacer pregunta al usuario
    - el usuario va a responder
    almacenar respuesta en memoria
*/

let respuesta = prompt('¿qué seleccinado ganó el mundial Qatar 2023');

//condicional
if( respuesta.toLowerCase() == 'argentina' ){
    cita.innerHTML = '<img src="imgs/ok.png">'; 
}
else{
    cita.innerHTML = '<img src="imgs/error.png">';
}

