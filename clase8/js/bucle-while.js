let n = 1;
document.write('<select>');
while ( n < 15 ){
    //bloque de código a iterare
    document.write( '<option>'+n+'</option>');
    n++;
}
document.write('</select>');

const sabores = [
    'Frutilla', 'Chocolate',
    'Menta Granizada', 'Dulce de leche',
    'Vainilla', 'Maracuya',
    'Crema Americana', 'Limón',
    'Cereza', 'Lemon Pie', 'Crema Cookie',
    'Pistacchio'
];
const largo = sabores.length;
document.write('<hr>');
document.write('<ul id="lista">');
let i = 0;
while( i < largo ){
    document.write('<li>'+ sabores[ i ] +'</li>');
    i++;
}
document.write('</ul>');
