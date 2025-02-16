function numeroAleatorio(){
    return Math.random();
}


function adivinaElNumero(value){
    let number = numeroAleatorio();
    if(value==number){
        console.log('adivinaste el numero es: ' + value);
    }else if(value>number){
        console.log('El nuemer');
    }

}