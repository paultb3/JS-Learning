
class Animal {

    nombre = '';
    edad = 0;
    especie = '';

    constructor(nombre = 'Sin nombre', edad = 0, especie = 'No definido'){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
         this.nombre = nombre;
    }

    static mensaje(){
        console.log('Este es un mensaje Desde una clase estatica');
    }

    quienSoy(){
        return `Soy ${this.nombre} de la especie ${this.especie} y tengo ${this.edad} años`;
    }
}

class Person extends Animal {
    genero = '';

    constructor(nombre, edad, especie, genero = 'No defenido'){
        super(nombre,edad,especie);
        this.genero  = genero;
    };

    quienSoy(){
        super.quienSoy() + ` y de generp ${this.genero}`;
    }
}


const jhendy = new Person('Jhendy', 30, 'Humana', 'Femenino');
console.log(jhendy);

const padu = new Animal('Padu' , 2, 'Felino');
console.log(jhendy.quienSoy());
console.log(padu.quienSoy());