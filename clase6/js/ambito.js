let numero = 10;

function mostrarNumero(){
    console.log( numero );
    let numero2 = 20;
    //console.log( numero2 );
}
function mostrarOtroNumero()
{
    console.log( numero );
    numero3 = 30;
}

mostrarNumero();
//console.log( numero2 ); 
/* no se puede acceder a la variable numero2 local */
mostrarOtroNumero();
console.log( numero3 ); 