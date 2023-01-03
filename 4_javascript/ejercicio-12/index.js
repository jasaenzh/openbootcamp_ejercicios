const logger = require('./logger/index')

const sumar = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    throw new Error("Los numeros deben de ser un valor numericos")
}

// console.log(miFuncion("ala"))

const numero1 = "15";
const numero2 = 7;
try {
    const sumaNumeros = sumar(numero1, numero2)
    console.log(`La suma es: ${sumaNumeros}`)

} catch (error) {
    logger.error(`sumar(): ${error}`)
} finally {
    console.log("Gracias!")
}