const dia = 1;
const horaActual = 10;

let horaApertur;
let mensaje ; //esta abierto, esta cerrado, hoy abrimos a las xx

//if([0,6].includes(dia)){
    console.log('FIn de semana');
    horaApertur = 9;
//}else{
 //   console.log('Dia de semana');
//    horaApertur =11; 
//}

horaApertur = ([0,6].includes(dia))? 9:11;


//if(horaActual >= horaApertur){
//    mensaje = 'Esta abierto';
//}else{
//    mensaje = 'Esta cerrado, Hoy abrimos a las ' + horaApertur;
//}

mensaje = (horaActual>=horaApertur) ? 'Esta abierto' : 'Esta cerrado, hoy abrimos a las ' + horaApertur;

console.log({horaApertur, mensaje});