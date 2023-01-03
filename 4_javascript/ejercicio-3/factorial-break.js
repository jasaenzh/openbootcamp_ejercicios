let numero = 10;
let factorial = 1;



while (numero > 1) {
    if (numero === 0 || numero === 1) {
        break;
    }
    factorial = factorial * numero
    numero = numero - 1
}

console.log(`Factorial es: ${factorial}`)