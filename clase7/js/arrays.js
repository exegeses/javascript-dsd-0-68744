const cita = document.querySelector('#cita');
/*### array de marcas ###*/
const marcas = [
                'Hermès', 'Zara', 'Boss', 
                'Aeropostale','Tommy', 'Hollister', 
                'Kingpin', 'Gola', 'Old Navy'
               ];
    console.log(marcas);

/* imprimimos en el span */
cita.innerText = marcas[3];