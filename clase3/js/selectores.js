const h1 = document.getElementsByTagName('h1');
console.log(h1);
//h1[0].style.backgroundColor = '#202';
const elH1 = document.querySelector('h1');
elH1.style.backgroundColor = '#202';

//const articulo = document.querySelector('#articulo');
const articulo = document.getElementById('articulo');
articulo.style.color = '#fff';

//const lis = document.getElementsByTagName('li');
const lis = document.querySelectorAll('li');
console.log(lis);
lis[2].style.fontSize = '24px';

//const parrafo = document.getElementsByClassName('parrafo');
const parrafo = document.querySelectorAll('.parrafo');
console.log(parrafo);

parrafo[2].style.backgroundColor = '#303';

/*
const arr = [1, 2, 3];
console.log('array: ', arr);

arr.push(4);
arr.push(5);
console.log('array: ', arr);
*/