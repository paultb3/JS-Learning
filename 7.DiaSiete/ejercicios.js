function sumar1(a,b){
    return a+b;
}

const sumar2 = (a,b)=>{
    return a+b;
}
//Remen de la funcion flecha si solo tiene un linea de codigo
const sumar3 = (a,b)=> a+b;

function getAleatorio(){
    return Math.random();
}
//convertir en una funcion de fecha
const aleatorio2 = () => Math.random();

console.log(sumar1(4.8,7));
console.log(sumar2(3,7));
console.log(sumar3(4,20));

console.log(getAleatorio());
console.log(aleatorio2());
