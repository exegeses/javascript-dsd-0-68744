const numero = 30;
/*
switch( numero ){
    case ( numero < 20 ):
        console.log('es menor');
        break;
    case 20:
        console.log('es 20');
        break;
    case ( numero > 20 ):
        console.log('es mayor');
        break;
    default: 
        console.log('no lo so');
        break;    
}
*/
switch( numero )
{
    case 10:
        console.log('es 10');
        break;
    case 20:
        console.log('es 20');
        break;
    case 30:
        console.log('es 30');
        break;
}

if( numero < 20 ){
    console.log( 'menor a 20' );
}
else if( numero == 20 ){
    console.log( 'es 20' );
}
else if( numero > 20 ){
    console.log( 'mayor a 20' );
}