const regresaTrue = ()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(!true);
console.log(!false);

console.log(!regresaFalse());
console.log(!regresaTrue());

console.warn('And');
console.log(true && true);
console.log(true && false);

console.log('====================');
console.log(regresaFalse() && regresaTrue()); //aqui solo se ejecuta lo primero no necesariamente el segundo 
console.log(regresaTrue() && regresaFalse());
console.log('4 condiciones' , true&& true&& true&& false);



console.warn('Or'); //solo uno de ellos sea verdadero la salida es verdadera, si ambos son falsos sale falso
console.log(false || false);
console.log(false || true);

console.log(regresaTrue() || regresaFalse()); //solo ejecuta la prima parte y no hace falta evaual al resto
console.log('4 condiciones' , true|| true|| true|| false);


console.warn('Asiganciones');
const soyUndefinido = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'hola' && 'mundo ' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyNull || soyUndefinido || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || regresaTrue() || soyUndefinido || 'Ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4,a5});