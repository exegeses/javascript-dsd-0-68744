//ubicamos elementos dentro del DOM
const span = document.querySelector('#rotador span');
const imagenes = document.querySelectorAll('#rotador img');
//botones
    const btnAnterior = imagenes[0];
    const btnSiguiente = imagenes[1];

/*### array de marcas ###*/
const marcas = [
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale','Tommy', 'Hollister', 
    'Kingpin', 'Gola', 'Old Navy'
   ];

/* estado inicial */
let llave = 2;
span.innerText = marcas[ llave ];

btnSiguiente.addEventListener(
        'click',
        function()
        {
            llave++; // llave = llave + 1
            if( llave == 9 ){
                llave = 0
            }
            span.innerText = marcas[ llave ];
        }
);