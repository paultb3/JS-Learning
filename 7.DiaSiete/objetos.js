const personaje = {
    nombre : 'Toni Stark',
    codeNAme : 'Ironman',
    edad : 40,
    coords :{
        lat:34.034,
        lng : -118.70,
    },
    trajes : ['MArk I', 'MArk II', 'Mark III'],
    direccion:{
        zip: '1080 9026',
        ubicacion: 'hawai autralia',

    },
    'ultima-pelicula': 'INfinity war'
}

console.log(personaje['ultima-pelicula']);


//borrar propiedade de objeto
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

//trabajar como array mi objeto
const entriesPares = Object.entries(personaje);
console.log(entriesPares);


//bloqueo de propiedad o modificaciones, congela 
Object.freeze(personaje);

personaje.dinero = 20120300;
personaje.casado = false
personaje.direccion.ubicacion = 'Peru';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);