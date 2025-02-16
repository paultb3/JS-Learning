let a = 1, b = 10;
a = 30;

console.log({a,b});


let brennis = {nombre: 'Brennis'};
let juan = {...brennis}; //el operador spret ... , mantiene los cambios, rompe la referencia de los objetos 
juan.nombre = 'Juan';

console.log({brennis, juan});

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});

//arreglos

const frutas = ['pera','manzana','lucma'];

console.time('spread');
const otrasFrutas = [...frutas]; //Rompemos la relacion entre ambos arrays
console.timeEnd('spread');

console.time('slice');
const otraFrutaCosta = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('naranja')

console.log({
    frutas, otrasFrutas
});

console.log({otraFrutaCosta});
