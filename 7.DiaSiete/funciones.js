function saludar(name){
    console.log(arguments);
    console.log('Hola: ' + name);
}


//No hay manera que la funcion sea reutilizado en mi app
const saludar22 = function(name){
    console.log("Hello world, con: " + name);
}

//si tenemos una variale que no esta inicializada el valor que tendra es de : undefine

saludar('Milena',50,true,'casado');
saludar2('Shaman');

//funciones flechas
const saludarFlecha = (nombre) =>{
    console.log(nombre+ ': Esta usando una funcion flecha');
}


//fomas de definir funciones

//1.Tradicional
function saludar(nombre){
    console.log('Hola' + nombre + '!!!');
}

//2.Asociado a una constante
const saludar1 = function (nombre){
    console.log('Hola mi querida' + nombre);
}

//3.Flecha
const saludarConFlecha = (nombre)=>{
    console.log('hola ' + nombre + ' estas usando una funcion flecha');
}

//incluimos los argumentos
function saludar2(){
    console.log('hola');
    console.log(arguments);
    return 1;
}

let number = saludar2();
console.log({number});

function numbers(){
    return [1,2,3,4,5];
}

let miNumbers = numbers();
console.log(miNumbers[1], miNumbers[4]);