
const personaje = {
    nombre: 'Tony',
    edad:30,
    nombreClave : 'ironMan',
    coords :{
        lat : 34.234,
        lng: -118.70,
    },

    trajes: ['MarkI','MarkII','MArkIII'],

    'ultima-pelicula' : 'Infinity war'
}

//Borramos alguna propiedad de los objetos
delete personaje.edad;
console.log(personaje);

//agregamos propidades
personaje.casado = true;


//parez de valores
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//para bloquear los cambios para mi objeto
Object.freeze(personaje);

personaje.dinero = 1823213123;
console.log(personaje);