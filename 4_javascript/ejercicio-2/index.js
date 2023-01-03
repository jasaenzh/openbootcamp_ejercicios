const lista = [
    "Jhony",
    37,
    true,
    new Date(2022, 10, 3),
    {
        titulo: "100 años de soledad",
        autor: "Gabriel Garcia Marquez",
        fecha: new Date(1985, 02, 26),
        url: "https://mipagina.com"
    }
]

console.log(`Tipo de variable nombre ${typeof lista[0]}`)
console.log(`Tu nombre: ${lista[0]}`)

console.log(`Tipo de variable edad ${typeof lista[1]}`)
console.log(`Tu edad: ${lista[1]}`)

console.log(`Tipo de variable eres desarrollador ${typeof lista[2]}`)
console.log(`Eres desarrollador?: ${lista[2]}`)

console.log(`Tipo de variable nacimiento ${typeof lista[3]}`)
console.log(`Tu fecha de nacimiento: ${lista[3]}`)

console.log(`Tipo de variable titulo ${typeof lista[4].titulo}`)
console.log(`Titulo: ${lista[4].titulo}`)

console.log(`Tipo de variable autor ${typeof lista[4].autor}`)
console.log(`Titulo: ${lista[4].autor}`)

console.log(`Tipo de variable fecha ${typeof lista[4].fecha}`)
console.log(`Titulo: ${lista[4].fecha}`)

console.log(`Tipo de variable url ${typeof lista[4].autor}`)
console.log(`Titulo: ${lista[4].url}`)