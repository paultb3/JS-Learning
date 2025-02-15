//funcion normal
function crearPersona(nombre, apellido){
    return{nombre, apellido}
}

//funcion flecha
const crearPersona1 = (nombre, apellido) => {(nombre,apellido)}; //los parentecis indican que son objetos lo que va retornar


const personaje = crearPersona('Paul','Tarazona');
console.log(personaje);

const personaDos = crearPersona1('Emma','Torres');
console.log(personaDos);

function printArguments(){
    console.log(arguments);
}

//... parametro rest, crea un arreglo con todos los parametros, despues del parametro rest no va ningun argumento
const argumentos2 = (edad,...args) =>{
    //console.log({edad,args})
    return args;
    };

printArguments('mama',123,234.2,false,true,'milord');

const[nombre, edad, vivo] = argumentos2('Dueño','Tayzon',12.2,true);
console.log({nombre,edad,vivo});

const {apellido:apellidoNevo} = crearPersona('Paul','TB')
console.log(apellidoNevo);


const tony = {
    nombre : 'Toni Stark',
    codeNAme : 'Ironman',
    edad : 40,
    trajes : ['MArk I', 'MArk II', 'Mark III']
}

//ultimo pro tip, para propiedades
const imprimerPersonaje = ({nombre, codeNAme, edad = 15 ,trajes}) =>{
    console.log({nombre});
    console.log({codeNAme});
    console.log({edad});
    console.log({trajes});
}

imprimerPersonaje(tony)