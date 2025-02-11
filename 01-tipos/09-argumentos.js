function suma(a, b) {
    console.log(arguments); // no es la forma recomendada para acceder a los parametros de nuestra funcion
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
