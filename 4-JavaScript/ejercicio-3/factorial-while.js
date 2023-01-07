let numero = 10;
let factorial = 1;

while (numero > 1) {
    factorial = factorial * numero
    numero = numero - 1
}

console.log(`Factorial es: ${factorial}`)