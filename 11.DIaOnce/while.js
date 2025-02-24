console.warn('While');

const carros = ['Ford','Ferrari','Bugati','Lamborguini','Guiron'];
let i = 0;

//undifine, se considera como false
while(carros[i]){
    if(i===0){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('Do while');
let j=0;

do {
console.log(carros[j]);
j++;

}while(carros[j]);