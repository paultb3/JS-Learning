//Creditos: midudev

function muestraPorcentaje(porcentaje){

    if(porcentaje==0){
        return "⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.0 && porcentaje<=0.1){
        return "🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.1 && porcentaje<=0.2){
        return "🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.2 && porcentaje<=0.3){
        return "🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.3 && porcentaje<=0.4){
        return "🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.4 && porcentaje<=0.5){
        return "🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪";
    }

    if(porcentaje>0.5 && porcentaje<=0.6){
        return "🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪";
    }

    if(porcentaje>0.6 && porcentaje<=0.7){
        return "🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪";
    }

    if(porcentaje>0.7 && porcentaje<=0.8){
        return "🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪";
    }

    if(porcentaje>0.8 && porcentaje<=0.9){
        return "🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪";
    }

    if(porcentaje>0.9 && porcentaje<=1){
        return "🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵";
    }

}

const CalculaPorcentaDecimal = (porcentaje) => porcentaje/100;


function ValorFinal(valor){
    let porcentaje = CalculaPorcentaDecimal(valor);
    
    console.log("Progreso: " + valor + "%" );
    console.log(muestraPorcentaje(porcentaje));
}


ValorFinal(97);