function elegirDiaSemana(valor){
    let diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    return diasSemana[valor-1];
}
function rutinasSemana(dia){
    let elegido = elegirDiaSemana(dia);
    switch(elegido){
        case 'lunes':
            console.log(elegido + ": Pecho,Triceps y hombro");
            break;
        case 'martes':
            console.log(elegido + ": Descanso");
            break;
        case 'miercoles':
            console.log(elegido + ": Espalda ,Bicesp y Hombro");
            break;
        case 'jueves':
            console.log(elegido + ": Descanso");
            break;
        case 'viernes':
            console.log(elegido + ": Piernas, hombro");
            break;
        case 'sabado':
            console.log(elegido + ": Descanso");
            break;
        case 'domingo':
            console.log(elegido + ": Descanso");
            break;

        default:
            console.log('Dia no encontrado');
    }
}


console.log("Encuntra tu rutina perfecta");
rutinasSemana(7);