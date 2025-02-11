let superHeroes = ['Iron-man','Capitan-america','Vision','Antman','Pantera-negra'];
console.log(superHeroes);

/*superHeroes.forEach((elemento, indice, array)=>{
    console.log(elemento,indice, array);
})*/


//push(), agrega elementos al array
let nuevoHeroe = superHeroes.push('Hulk');
console.log({nuevoHeroe,superHeroes});
console.log(superHeroes);

//unshift(), Agrega un elemnto en primer lugar del array
let primerHeroe = superHeroes.unshift('Wolverine');
console.log({primerHeroe,superHeroes});
console.log(superHeroes);

//pop(), Eliminar el ultimo elemento del array
let eliminarHereo = superHeroes.pop();
console.log({eliminarHereo, superHeroes});
console.log(superHeroes);

//splice(), elimina tanto elementos como quieras desde un indice

let indice = 2;
let heroesEliminados = superHeroes.splice(indice,3);
console.log({heroesEliminados, superHeroes});
console.log(superHeroes);

let indiceVision = superHeroes.indexOf('Iron-man');
console.log(indiceVision);
console.log(superHeroes);

superHeroes.push('io');
console.log(superHeroes);