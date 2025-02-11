// Personaje de TV
let nombre = 'Lupin';
let caricatura = 'Belfort and Lupin';
let edad = 2;
let color = 'Negro azulado';

let personaje = {
    nombre:'Lupin',
    caricatura:'Belfort and Lupin',
    edad: 2,
    color: 'Negro azulado', 
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre']);

personaje.edad = 3;

let llave = 'edad';
personaje[llave] = 3;

delete personaje.color;

console.log(personaje);