function sinParametros() {
    return true
}

async function saludarSetTimeout() {
    espera = setTimeout(() => console.log("Hola soy una promesa"), 5000)
    return espera
}

function* indicesPares() {
    let par = 0
    while (true) {
        par = par + 2;
        yield par
    }
}