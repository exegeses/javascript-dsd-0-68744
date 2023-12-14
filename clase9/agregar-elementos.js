const input = document.querySelector('#input');
const boton = document.querySelector('#boton');
const lista = document.querySelector('#lista');

/*
    1.- obtener el valor (texto) que el usuario escriba en el input
           .value

    2.- a ese valor lo vamos a agregar en un array
            .push()

    agregar los <li> en la lista
*/

const elementos = [];
function agregarElemento()
{
    let contenido = '';
    let largo = elementos.length;
    for( let i = 0; i < largo; i++ ){ //3
        contenido = contenido + `<li>${elementos[i]}</li>`;
    }
    lista.innerHTML = contenido;
}


boton.addEventListener(
        'click',
        function()
        {
            let nuevoElemento = input.value;// 1
            elementos.push(nuevoElemento);//2
            agregarElemento(); // 3
        }
);