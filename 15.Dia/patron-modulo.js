//usar este patron para tener mas orden y control en nuestra app
(()=>{
    'use strict'

     const personajes =["Iron-Man","Hulk","Spider-Man"]
    console.log(personajes);

    for (const element of personajes) {
        
        if(element ==='Hulk'){
            console.log('es grande, verde y fuerte');
        }
    }

})();