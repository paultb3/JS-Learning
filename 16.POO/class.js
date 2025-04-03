class Person{
    //Es opscional incializar los atributtos, se puede hacer defrente en el constructor
   
    static _conteo =0;

    static get conteo(){
        return Person._conteo + ' Instacias';
    }

    static mensaje(){
        console.log('este mensaje pertenece a un metodo estatico');
    }

    name = '' ;
    age = 0;
    address = '';
    comida = '';

    constructor(name = 'Sin nombre', age = 0, address = 'S/N'){
       
        this.name = name;
        this.age = age;
        this.address = address;
        Person._conteo++;
    }

    set setComidaFavorita(comida){
         this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.name} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años.`);
    }

    direccion(){
        console.log(`Me ubico en: ${this.address}`);
    }
}

const jhendy = new Person('Jhendy', 19, 'Grifo delta haci el rio');
const ironMan = new Person('Iron-Man', 31, 'Maiami beach');
const vane = new Person('Vane',30, 'Los vilccos');

//Un set no es un metodo es como una propiedad
jhendy.setComidaFavorita = "Chaufita con Atún";

//Agregar un atributo de esta forma no es recomendable en JS al usar POO
jhendy.nemesis ='Crespito';

console.log(Person._conteo);
console.log(Person.mensaje());

Person.propiedadExterna = 'Hola mundo';
console.log(Person.propiedadExterna);
console.log(Person);
