let personaje = {
    nombre: 'TOny stark',
    edad: 31,
    codeName: 'Ironman',
    vivo : false,
    coords: {
        lst: 34.05,
        long: -123.452,

    },
    trajes : ['mar 5', 'mar 6', 'huslkend'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California',
    },

    'ultima-pelicula': 'infiniti world',
}

console.log(personaje);
console.log('nombre: ' + personaje.nombre);
console.log('NOmbre: ' + personaje['nombre']);
console.log('edad: ' + personaje.edad);
console.log('Latitud: ' + personaje.coords.lst);
console.log('numero de trajes: ' + personaje.trajes.length);
console.log('ultimo traje: '+ personaje.trajes.pop());

const x = 'vivo';
console.log('esta vivo?: ' + personaje[x]);
console.log('ultima pelicula: '+personaje["ultima-pelicula"]);