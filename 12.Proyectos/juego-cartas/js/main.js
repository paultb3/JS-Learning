
let deck            = [];
const tipos         = ['C','D','H','S'];
const especiales    = ['A','J','Q','K'];
const btnPedir = document.querySelector('#btnPedir');

//crea la baraja
const crearDeck = () =>{

    for(let i = 2; i<=10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo)
        }
    }
    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo)
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//toma una carta
const pedircarta = () =>{
    if(deck.length ===0){
        throw 'No hay cartas en el deck';
    } 
    const carta = deck.pop();
    return carta;
}



/**const valorCarta = (carta) =>{

    const valor = carta.substring(0,carta.length - 1); //substr.. , hace desde inicio a fin
    let puntos = 0;
    
    if(isNaN(valor)){ //isNaN retorna true si lo evaluado no es un numero
        puntos = (valor === 'A')? 11:10;
    }else{
        console.log('es un  numero'); //cuando es gris es un string
        puntos = parseInt(valor); //si es morado es un numero
    }

console.log(puntos );
}**/

const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length -1);
    return isNaN(valor)? (valor === 'A') ? 11 : 10 : parseInt(valor);
}

//eventos
btnPedir.addEventListener('click', function(){ //click, doubleclick, focus.. son eventos de los botones
    console.log('hcimos mi click');
});