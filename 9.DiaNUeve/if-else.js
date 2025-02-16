let a = 3;

if(a>=10){
    console.log('el numero es mayor o igual a 10');
}else{
    console.log('el numero es menor o igual a 10');
}

const hoy = new Date();
let dia = hoy.getDay();
let hora = hoy.getHours();

console.log({dia,hora});

//1
function NombreDiaDeSemana(){
    const hoy = new Date();
    let dia = hoy.getDay();
    let diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return diasSemana[dia];
}
console.log(NombreDiaDeSemana());

const diaLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}
console.log(diaLetras[0]);