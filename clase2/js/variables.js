/*
    para declarar una variable
    utilizamos la palabra resevada
    "let"
*/
let numero = 42;
let frase = 'hola mundo';
/*
    para declarar una constante
    utilizamos la palabra resevada
    "const"
*/
const nombre = 'Marcos';

//imprimimos en el docuemnto
document.write( numero );
document.write( '<br>' );
document.write( frase );
document.write( '<hr>' );
// sobreescribimos la variable numero
numero = 73;
document.write( numero );
document.write( '<hr>' );
document.write( nombre );
//nombre = 'Titán'; no se puede sobre escribir una constante

/* ubicamos el span dentro del DOM 
        document.querySelector('#texto');
*/
document.querySelector('#texto').innerText = nombre;