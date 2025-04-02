
const jhendy = {
    nombre: "Jhendy",
    edad : 19,
}


function Persona(nombre, edad){

    this.nombre = nombre ;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const paul = new Persona("Paul", 21);
const maria = new Persona("maria", 25);
const marco = new Persona("Marco",16);

paul.imprimir();
maria.imprimir();
