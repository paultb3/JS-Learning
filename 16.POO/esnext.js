class Cuadrado {

    //En JS private s epone con #atributo
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    #calcularArea(){
        return this.#area*2;
    }

    mostrarArea(){
        return this.#calcularArea();
    }
}

const cuadrado = new Cuadrado(10,15);
console.log(cuadrado.mostrarArea());