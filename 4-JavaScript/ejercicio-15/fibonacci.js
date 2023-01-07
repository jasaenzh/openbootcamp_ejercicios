function Fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        var resultado = Fibonacci(num - 1) + Fibonacci(num - 2)
        return resultado;
    }

}

console.log(Fibonacci(20))