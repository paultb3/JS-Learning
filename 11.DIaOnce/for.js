const heroes =[ 'Batman','IronMAn','HUlk','HOmbre araña'];

console.warn('For');

for(let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
}


console.warn('For In');
for(let i in heroes){
    console.log(heroes[i]);
}


console.warn('For of');
for(let heroe of heroes){
    console.log(heroe);
}