// for( inicio; condición; incremento )

document.write('<select>');
for( let n = 1; n < 15; n++ ){
    document.write( '<option>'+ n + '</option>');
}
document.write('</select>');

document.write('<hr>');

const sabores = [
    'Frutilla', 'Chocolate',
    'Menta Granizada', 'Dulce de leche',
    'Vainilla', 'Maracuya',
    'Crema Americana', 'Limón',
    'Cereza', 'Lemon Pie', 'Crema Cookie',
    'Pistacchio'
];
const largo = sabores.length;

document.write('<ul id="lista">');

for( let i = 0; i < largo; i++ ){

    document.write('<li>'+ sabores[i] +'</li>');

}

document.write('</ul>');