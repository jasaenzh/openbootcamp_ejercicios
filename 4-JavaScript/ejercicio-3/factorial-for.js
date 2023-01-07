let numero = 10;
let factorial = 1;

for (let i = (numero + 1) - 1; i >= 1; i--) {
    factorial = factorial * i;
}

console.log(`Factorial es: ${factorial}`)