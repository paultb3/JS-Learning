const elMayor = (a,b) => (a>b) ? a : b;

const tieneMembresia = (miembro) => (miembro)  ? '2 dolares': '10 dolares';

console.log(elMayor(10,15));
console.log(tieneMembresia(false));

const amigo = true;

const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Stranger',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Furry')(),
];

console.log(amigoArr);

const nota = 95;

const grado = nota >= 95 ? 'A+':
              nota => 90 ? 'A':
              nota => 85 ? 'B+': 'F';

console.log({nota, grado});